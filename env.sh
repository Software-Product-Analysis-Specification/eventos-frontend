#!/bin/bash

# Recriar o arquivo de configuração
rm -rf ./env-config.js
touch ./env-config.js

# Adicionar a atribuição 
echo "window._env_ = {" >> ./env-config.js

# Ler cada linha no arquivo .env
# Cada linha representa pares chave-valor
while read -r line || [[ -n "$line" ]];
do
  # Dividir as variáveis env pelo caractere `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Ler os valores da variável atual se existir como uma variável de ambiente
  value=$(printf '%s\n' "${!varname}")
  # Caso contrário, usar o valor do arquivo .env
  [[ -z $value ]] && value=${varvalue}
  
  # Associar a propriedade de configuração ao arquivo JS
  echo "  $varname: \"$value\"," >> ./env-config.js
done < .env

echo "}" >> ./env-config.js