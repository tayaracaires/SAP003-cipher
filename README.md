# Mude sua senha!

## Índice

* [1. Prefácio](#1-prefácio)
* [2. O projeto](#2-O-projeto)
* [3. Como usar](#3-como-usar)
* [4. Ferramentas utilizadas](#4-ferramentas-utilizadas)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

## 2. O projeto

Esta aplicação foi desenvolvida para o usuário codificar ou decodificar uma senha, utilizando a cifra de César, aumentando a segurança da senha.

## 3. Como usar

* No campo **_Senha_** o usúario pode digitar a senha para ser cifrada ou decifrada, que pode ser formada por letras, números e caracteres especiais.  

* No campo **_Chave_** o usuário deve digitar o deslocamento desejado.

* O usuário possui duas opções: _Codificar_ ou _Decodificar_ a senha digitada.

* O campo **_Resposta_** retornará a senha _codificada_ ou _decodifica_.

## 4. Ferramentas utilizadas

Esta aplicação foi desenvolvida utilizando as seguintes ferramentas:

* 
