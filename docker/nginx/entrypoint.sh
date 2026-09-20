#!/bin/sh
set -eu

CERT_DIR=/etc/nginx/ssl
DOMAIN="${DOMAIN:-localhost}"
mkdir -p "$CERT_DIR" /var/www/certbot /tmp

if [ ! -f "$CERT_DIR/fullchain.pem" ] || [ ! -f "$CERT_DIR/privkey.pem" ]; then
  echo "[nginx] generating self-signed certificate for ${DOMAIN}"
  SAN="DNS:${DOMAIN},DNS:localhost,IP:127.0.0.1"
  if [ -n "${TLS_SAN:-}" ]; then
    SAN="${SAN},${TLS_SAN}"
  fi
  openssl req -x509 -nodes -newkey rsa:2048 -days 825 \
    -keyout "$CERT_DIR/privkey.pem" \
    -out "$CERT_DIR/fullchain.pem" \
    -subj "/CN=${DOMAIN}" \
    -addext "subjectAltName=${SAN}"
fi

# Reload when Let's Encrypt (or anyone) replaces the cert files.
(
  last=$(stat -c %Y "$CERT_DIR/fullchain.pem" 2>/dev/null || echo 0)
  while :; do
    sleep 30
    now=$(stat -c %Y "$CERT_DIR/fullchain.pem" 2>/dev/null || echo 0)
    if [ "$now" != "$last" ]; then
      last=$now
      echo "[nginx] certificate changed — reloading"
      nginx -s reload || true
    fi
  done
) &

exec nginx -g "daemon off;"
