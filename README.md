# Trabalho Bimestral - React - Valor 1.0

## Descrição
Este repositório contém o código-fonte de um projeto React desenvolvido como parte de um trabalho bimestral. O objetivo deste trabalho é implementar as funcionalidades de uma tela de filmes, incluindo ordenação, busca e detalhes de filmes, bem como um formulário de cadastro para assinatura de um serviço de streaming.

## Aluno
- Bruno da Silva Andrade - 8812798835

## Funcionalidades Implementadas
- Tela Home:
    - Ordenação de filmes por título
    - Busca por título e label do botão assistido
    - Carregamento dinâmico de filmes a partir da lista disponibilizada pela API https://my-json-server.typicode.com/marycamila184/movies/movies
    - Chamada da tela de detalhes do filme ao clicar em um cartão de filme
- Tela de Detalhes:
    - Carregamento dos detalhes do filme via chamada à API https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/{id}
    - Loading para esperar a chamada
    - Tratamento de caso a API retorne vazio (Exemplo - Iron Man)
- Tela de Cadastro:
    - Formulário de cadastro com campos para dados pessoais e bancários
    - Campo "Número do Cartão" com no máximo 20 dígitos
    - Campo CVC com * e com no máximo 3 dígitos
    - Botão de plano mudando o estilo caso seja clicado
    - Log via console do objeto com os dados do usuário cadastrado (Nome, Telefone, Endereço, Plano Escolhido, Nome no Cartão, Número do Cartão e CVC)

## Formato de Entrega
- Link do Github com o último commit antes do horário de entrega.
- Nome dos alunos deve ser incluído neste arquivo Readme.

## Especificações e Layout
- As especificações e layout das telas podem ser encontrados no seguinte link: https://docs.google.com/presentation/d/1lFT1eMEJKzUk659pLdl2jCW_mrGOW46_xKV0YkqIHjU/edit?usp=sharing