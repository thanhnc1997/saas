module.exports = {
  html(params = {}) {
    let title = `Bán hàng miễn phí`;
    let description = ``;
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <title>${params.title || title}</title>
      <meta name="description" content="${description}" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <!-- <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png"> -->
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Khand:wght@500&family=Noto+Sans&display=swap" rel="stylesheet">
			<link rel="stylesheet" href="/assets/css/main.css">
    </head>
    <body>
      <main></main>
			
      <script type="module" src="/assets/js/main.js"></script>
    </body>
    </html>
    `;
  },
  error_404(params = {}) {
    return `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>404</title>
        <style>
          * {
            transition: all 0.6s;
          }
          html {
            height: 100%;
          }
          body{
            font-family: 'Lato', sans-serif;
            color: #888;
            margin: 0;
          }
          #main {
            display: table;
            width: 100%;
            height: 100vh;
            text-align: center;
          }
          .fof {
            display: table-cell;
            vertical-align: middle;
          }
          .fof h1 {
            display: inline-block;
            padding-right: 12px;
            animation: type .5s alternate infinite;
          }
          @keyframes type{
            from{box-shadow: inset -3px 0px 0px #888;}
            to{box-shadow: inset -3px 0px 0px transparent;}
          }
        </style>
      </head>
      <body>
        <div id="main">
        <div class="fof">
        <h1>${params.message || 'Trang này không tồn tại!'}</h1>
        </div>
        </div>
      </body>
      </html>
    `;
  },
};