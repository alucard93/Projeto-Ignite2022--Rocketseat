# Ignite (2022) - Rocketseat

React é uma biblioteca para construção de interfaces altamente interativas(tudo que o usuário interage quando utiliza a sua aplicação)

# # DESIGNER PATTERS - SPA != SSR

SPA - você tem duas aplicações uma só voltada a manipulação de bancos de dados e a outra voltada a estrutura de dados e estilização (backend - front end)

SSR - FRONT E BACK, aplicação única toda dentro do backend

COMPILERS - COMPILADORES DE CÓDIGO - ferramentas que convertem nosso código de um formato para outro. (BABEL)
--NEM TODOS NAVEGADORES VÃO ENTENDER A ULTIMA VERSÃO DO NOSSO CÓDIGO OS COMPILERS CONVERTEM PARA UMA VERSÃO COMPATIVEL PARA O NAVEGADOR ENTENDER.

BUNDLERS - (WEBPACK) - FAZ O PROCESSO DE ENTENDER AS IMPORTAÇÕES E EXPORTAÇÕES E GERAR UM ARQUIVO DE BUNDLE

CRIAR O HTML E TUDO QUE O USUARIO UTILIZA A PARTIR DO JAVASCRIPT

# # Explicação Configuração do React

import React from 'react'; - pacote responsável pelo coor do react(o coração do react) onde tem as funcionalidades que são compartilhadas entre todas as interfaces todos esses ambientes, todos esses clientes seja react native, web, tv

import ReactDOM - é a integração do react o coor(coração do react) com a DOM(DOCUMENT OBJECT MODEL representação do nosso HTML)através do javascript

quando importamos o REACTDOM a gente está integrando o react para funcionar no ambiente web no browser

chamamos o método CREATEROOT de dentro do REACTDOM, e esse createroot recebe um parametro que é qual é o elemento raiz da nossa página html
no nosso caso esse elemento é o root com isso o react vai criar o html, css e todo javascript da aplicação dentro da div root, em seguida é passado o método render para renderizar

com isso o react joga as informações dentro do id root

# #Componente

uma forma de desacoplar um pedaço da nossa interface para que aquilo se torne repetitivel ou ate algo mais fácil de dar manutenção pq é um pedaço menor da aplicação

uma função que retorna html 

jsx = JAVASCRIPT + XML


# # Propriedades 
- informações que a gente pode passar para outros componentes
- atributos no contexto de react são propriedades
  

  # # CSS MODULE
  - CRIA O ARQUIVO COM O NOME DO COMPONENTE SEGUIDO DE MODULE E .CSS EX: Header.module.css
  - IMPORT NO ARQUIVO QUE QUER UTILIZAR SEGUINDO O SEGUINTE EXEMPLO: 
    import styles from './Header.module.css'


# 3 MOMENTOS QUE O COMPONENTE RENDERIZA NOVAMENTE
  - Quando o estado muda
  - Quando a propriedade altera
  - Quando um componente pai renderiza novamente

---

# Nunca se deve chamar uma execução de função ex: {handleSubmit()}
  - ela gera um loop infinito visto que o react atualiza quando o estado, propriedade e o elemento pai se atualiza
  
  # Devido a isso devemos chamar a função caso seja necessario passar parametro na função criamos uma função anonima {() => handleSubmit()}

  # Sempre quando você for atualizar uma informação e essa informação depende do valor que ela tinha anteriormente e sempre legal usar esse padrão de funções

  function handleLikeComment () {
    setLikeCount((state) => {
      return state + 1
    })
  }