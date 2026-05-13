# Registros DNS para Google Workspace (bueysherpa.com)

Estos registros deben añadirse manualmente en el Dashboard de Vercel (Domains > bueysherpa.com > DNS Records).

## 1. Verificación de Dominio (TXT)
- **Type**: `TXT`
- **Name**: `@` (o dejar vacío)
- **Value**: `google-site-verification=m6tU_eLtJjdnoVrcazDB84UKQNXl147KAvomc966TJk`

## 2. Registros MX (Correo)
| Priority | Target |
|----------|--------|
| 1 | `ASPMX.L.GOOGLE.COM.` |
| 5 | `ALT1.ASPMX.L.GOOGLE.COM.` |
| 5 | `ALT2.ASPMX.L.GOOGLE.COM.` |
| 10 | `ALT3.ASPMX.L.GOOGLE.COM.` |
| 10 | `ALT4.ASPMX.L.GOOGLE.COM.` |

## 3. Seguridad SPF (TXT)
- **Type**: `TXT`
- **Name**: `@` (o dejar vacío)
- **Value**: `v=spf1 include:_spf.google.com ~all`
