# Джуность 🌱

Объективные грейды для развития специалистов сферы digital, предложенные и развиваемые профессиональным сообществом.

Есть предложения по добавлению/изменению/удалению какого-либа скилла из грейдов? Скорректируйте [контентный json](https://github.com/anmedio/grades/blob/master/src/react/grades.js) и отправьте pull request или [напишите issue](https://github.com/anmedio/grades/issues).

[Открыть грейды](https://anmedio.github.io/junost/)

## Develop mode

Чтобы запустить проект в режиме разрабочика вам потребуется открыть два окна с терминалом и запустить скрипты:

```bash
  npm run gulp:start
```

```bash
  npm run react:start
```

Чтобы собрать финальный бандл проекта необходимо выполнить команду:

```bash
  npm run build:production
```

Однако для PR финальный бандл можно не собирать, так как даже если он будет присутствовать в проекте, в мастер он не уйдёт (бандл делается модератором проекта после финального рефакторинга и согласования)

Сборка находится в папке `docs`, оттуда она автоматически попадает на githubpages.

### Contributors

<a href="https://github.com/anmedio/junost/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=anmedio/junost" />
</a>
