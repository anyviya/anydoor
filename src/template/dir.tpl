<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
  * {
    margin:0;
    padding: 0;
  }
  body {
    margin: 30px;
  }
  a {
    display: block;
    font-size: 30px;
    text-decoration: none;
  }
  .img {
      position: relative;
      top: 4px;
      display: inline-block;
      width: 29px;
      height: auto;
  }
  </style>
</head>
<body>
{{#each files}}
    <a href="{{../dir}}/{{file}}"><img class="img" src="{{icon}}" />{{file}}</a>
{{/each}}
</body>
</html>
