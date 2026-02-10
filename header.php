<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sugoo Wheelchair</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri();?>/assets/css/style.css" />
  <?php wp_head(); ?>
</head>
<body>
<header class="c-header">
  <div class="l-container">
    <div class="c-header__inner">
      <!-- Logo -->
      <div class="c-header__logo">
        <a href="/">
          <h1><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/common/logo-header.png" alt="Sugo 車いす即日レンタル専門店"></h1>
        </a>
      </div>

      <!-- Navigation -->
      <nav class="c-header__nav">
        <ul class="c-header__menu">
          <li class="c-header__item is-active">
            <a href="#">サービスの特徴</a>
          </li>
          <li class="c-header__item">
            <a href="#">即日お届けエリア</a>
          </li>
          <li class="c-header__item">
            <a href="#">車いすの種類</a>
          </li>
          <li class="c-header__item">
            <a href="#">レンタル料金</a>
          </li>
          <li class="c-header__item">
            <a href="#">オプション品</a>
          </li>
          <li class="c-header__item">
            <a href="#">ご利用の流れ</a>
          </li>
        </ul>

        <!-- Hamburger -->
        <button class="c-hamburger" aria-label="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </div>
</header>

