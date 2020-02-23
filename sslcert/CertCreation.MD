openssl req -config sslcert/san.cnf -new -x509 -days 825 -out sslcert/server.crt -keyout sslcert/server.key

# Background Articles
https://devcenter.heroku.com/articles/ssl-certificate-self

openssl req -out sslcert/server.csr -newkey rsa:2048 -nodes -keyout sslcert/server.key -config sslcert/san.cnf
openssl x509 -req -sha256 -days 825 -in sslcert/server.csr -signkey sslcert/server.key -out sslcert/server.crt -sha256 -extfile sslcert/v3.ext



https://stackoverflow.com/questions/58500892/install-self-signed-certificates-no-longer-working-in-android-q

**openssl commands:**
openssl req -new -newkey rsa:2048 -days 3650 -nodes -x509 -subj "/C=US/ST=Oklahoma/L=Stillwater/O=My Company/OU=Engineering/CN=test.com" -keyout ca.key -out ca.crt
openssl genrsa -out "test.key" 2048
openssl req -new -key test.key -out test.csr -config openssl.cnf
openssl x509 -req -days 3650 -in test.csr -CA ca.crt -CAkey ca.key -CAcreateserial -extensions v3_req -extfile openssl.cnf -out test.crt
openssl x509 -inform PEM -outform DER -in test.crt -out test.der.crt


**Contents of openssl.cnf:**
[req]
default_bits = 2048
encrypt_key  = no # Change to encrypt the private key using des3 or similar
default_md   = sha256
prompt       = no
utf8         = yes

# Specify the DN here so we aren't prompted (along with prompt = no above).

distinguished_name = req_distinguished_name

# Extensions for SAN IP and SAN DNS

req_extensions = v3_req

# Be sure to update the subject to match your organization.

[req_distinguished_name]
C  = US
ST = Oklahoma
L  = Stillwater
O  = My Company
OU = Engineering
CN = test.com

# Allow client and server auth. You may want to only allow server auth.
# Link to SAN names.

[v3_req]
basicConstraints     = CA:TRUE
subjectKeyIdentifier = hash
keyUsage             = digitalSignature, keyEncipherment
extendedKeyUsage     = clientAuth, serverAuth
subjectAltName       = @alt_names

# Alternative names are specified as IP.# and DNS.# for IP addresses and
# DNS accordingly.

[alt_names]
DNS.1 = test.com