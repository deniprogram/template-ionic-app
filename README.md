## Documentation

## Build Setup

# Install dependencies
npm install

# Create database with the credentials
username: root
host: localhost
database: api
no password

# Execute tests
npm run test

# Start application - localhost:3001
npm run start

## Directory architecture

.
├── app                   # Dentro dessa pasta estão os arquivos da estrutura MVCS;
├── bin                   # Aqui fica o arquivo de inicialização da aplicação
├── config                # Configurações da aplicação porta, versões...
├── keys                  # Todas as chaves de acesso ou criptografia fica neste diretorio
├── modules               # Modulos auxiliares no desenvolvimento como realtime, db-adapters
├── test                  # Todos os testes da aplicação desde testes unitário a teste de integração
