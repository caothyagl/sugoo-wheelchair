<footer class="c-footer">
  <div class="l-container">
    <!-- background image -->
    <div class="c-footer__bg">
      <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/footer-img.png" alt="">
    </div>

    <!-- content -->
    <div class="c-footer__content">

      <!-- logo -->
      <div class="c-footer__logo">
        <a href="<?php bloginfo('/') ?>"><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/common/logo-footer.png" alt="Sugoo"></a>
      </div>

      <!-- nav -->
      <div class="c-footer__nav">

        <div class="c-footer__col">
          <h3 class="c-footer__title">企業情報</h3>
          <ul>
            <li><a href="#">会社概要</a></li>
            <li><a href="#">事業の目的</a></li>
            <li><a href="#">ご挨拶</a></li>
            <li><a href="#">基本方針</a></li>
            <li><a href="#">所在地</a></li>
          </ul>
        </div>

        <div class="c-footer__col">
          <h3 class="c-footer__title">プライバシーポリシー</h3>
          <ul>
            <li><a href="#">個人情報保護方針</a></li>
            <li><a href="#">個人情報の取り扱い</a></li>
          </ul>

          <h3 class="c-footer__title">ご利用に際して</h3>
          <ul>
            <li><a href="#">特定商取引法の表記</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="copy-right">Personal  Life Japan Corp.</div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/assets/js/wheelchair.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/assets/js/accordion.js"></script>
<script src="<?php echo get_stylesheet_directory_uri();?>/assets/js/modal.js"></script>
<?php wp_footer(); ?>
</body>
</html>