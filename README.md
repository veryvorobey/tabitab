# tabitab

## репозиторий проекта
https://github.com/veryvorobey/tabitab.git

## дизайн
https://www.figma.com/file/k6nMxhTVfVmERF7QIP1XrL/?node-id=7%3A1128488

## начало работы
* скачай код репозиторий (в вебшторме меню Git -> Clone...-> там вставляешь ссылку на репозиторий)
* установи в терминале имя и почту для проекта
  - git config user.name "Name Surname"
  - git config user.email "email@gmail.com"
* убедись, что имя и почта установились корректно
  - git config user.name должно вывести твое имя
  - git config user.email должно вывести твою почту
* устаови все пакеты (чтобы появилась папка node_modules)
  - либо нажми в всплывающем окошке npm install
  - либо в терминале введи npm install
* запусти дев сервер
  - либо в терминале введи npm start
  - либо во вкладке npm нажми start
  - либо нажми нажми зелетную иконку play, если слева от нее надпись START
  
## создание новых блоков     

Название блока бери из дизайна (Например для Call to Action - CallToAction) 
* в папке block папку CallToAction а в ней
* файл CallToAction.tsx
```sh
import React from 'react';
import './CallToAction.scss';

function CallToAction() {
  return (
    <div className="CallToAction">
      // тут пишешь разметку
    </div>
  );
}

export default CallToAction;
```

* и файл CallToAction.scss
```sh
.CallToAction {
  // тут пишешь стили
}

// тут вставляешь блоки стилей для прочих элементов блока
```

## как называть классы
Например если в компоненте CallToAction есть кнопка, то для нее класс должен называться CallToAction-button

## картинки
Картинки вставляй в папку images

## коммиты
сделав каждый блок делай коммит. например для блока  CallToAction для Page1 сообщение должно быть таким: 
```sh
add CallToAction block for Page1 
```
* чтобы открыть вкладку коммита, нажми Ctrl + K
* вводи сообщение
* убедись, что не выбрано никаких ненужных файлов
* убедись, что у коммита есть твое имя
* жми Push
