<?php get_header(); ?>

<main class="top">
  <div class="l-container">
    <div class="top-mainvisual">
        <img class="top-mainvisual__img" src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/mv.jpg" alt="">
    </div>
  </div>

  <section class="top-wheelchair">
    <div class="l-container">
      <!-- Top text -->
      <div class="top-wheelchair__header">
        <h2 class="top-wheelchair__jp">
          私たちは 即日レンタル対応の車椅子専門店です<br>
          <span class="top-wheelchair__en">
            We are a wheelchair specialty store that offers same day rentals.
          </span>
        </h2>
      </div>

       <!-- Center badge -->
        <div class="top-wheelchair__badge">
          <p class="top-wheelchair__badge-top">365<span>日営業</span></p>
          <p class="top-wheelchair__badge-main">当日お届け！</p>
        </div>

      <!-- Products -->
      <div class="top-wheelchair__list">
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-01.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-02.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-03.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-04.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-05.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-06.jpg" alt="">
        </div>
        <div class="top-wheelchair__item">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/types-wheelchair-07.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="top-express">
    <div class="l-container">
      <!-- Title -->
      <div class="top-express__header">
        <div class="top-express__label">
          サービス<span>の</span>特徴
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/icon-sugoo.png" alt="">
        </div>
        <div class="top-express__title">
          <p class="is-accent">エクスプレス<span>配送</span></p>
          <p class="is-strong"><span>当</span><span>日</span><span>お</span><span>届</span><span>け</span>！</p>
        </div>
      </div>

      <!-- Content -->
      <div class="top-express__content">
        <div class="top-express__icon">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/delivery-express.png" alt="EXPRESS">
        </div>
        <h2 class="top-express__headline">
          <strong>365</strong>日 休まず営業
          <span class="top-express__sub">翌日のお届けも可能！</span>
        </h2>
      </div>

      <div class="top-express__desc">
        車いす即日レンタル専門のSugooは365日年中無休にて、専門スタッフが自社便にて即日配送し、<span>ご希望の場所へご希望の車いすを、「最短当日お届け」致します</span>。また、専門スタッフならではの、お身体に合わせてサイズ調整を行う「フィッティングサービス」や「ご本人ご家族への使い方のレクチャー」もご提供しております。お急ぎでの現地でのお渡しも可能です。ご希望ご要望ございましたら是非お聞かせくださいませ。
      </div>
    </div>
  </section>

  <section class="top-area">
    <div class="l-container">
      <div class="top-area__header">
        <h2 class="top-area__title">
          <span>即日</span> お届けエリア
        </h2>
        <figure class="top-area__img">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/delivery-express-01.png" alt="即日 お届けエリア">
        </figure>
      </div>

      <div class="top-area__content">
        <!-- LEFT -->
        <div class="top-area__map">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/delivery-express-02.png" alt="">
        </div>

        <!-- RIGHT -->
        <div class="top-area__info">
          <div class="top-area__info-head">
            <h3 class="top-area__region">関東 東海 エリア</h3>

            <h4 class="top-area__count">1都8県</h4>
          </div>

          <ul class="top-area__list">
            <li>東京</li>
            <li>神奈川</li>
            <li>埼玉</li>
            <li>千葉</li>
            <li>茨城</li>
            <li>栃木</li>
            <li>群馬</li>
            <li>静岡</li>
            <li>山梨</li>
          </ul>

          <p class="top-area__desc">
            1都8県にご希望の車椅子を即日対応にてお届けいたします。<br>
            当日のご対応も可能です。どうしても朝から必要になった…<br>
            明日の旅行先で快適に移動したい…介護ができてとても困っている。<br>
            お困りの事がございましたらお気軽なくご相談くださいませ。
          </p>
          <figure class="top-area__img1"><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/delivery-express-03.png" alt=""></figure>
        </div>
      </div>
    </div>
  </section>

  <section class="top-types">
    <div class="l-container">
      <div class="top-types__header">
        <span class="top-types__label">レンタル商品一覧</span>
        <h2>車いす<span>の</span>種類</h2>
        <p class="top-types__en">Types of wheelchairs</p>
      </div>

      <?php include('template-part/wheelchair-types.php') ?>
    </div>
  </section>

  <section class="top-rent">
    <div class="l-container">
      <div class="top-rent__inner">
        <div class="top-rent__head">
          <h2>レンタル料金<br><span>Rental Price Menu</span></h2>
          <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/rent-top-01.png" alt="レンタル料金"></figure>
        </div>

        <div class="top-rent__body">
          <div class="top-rent__body-intro">
            <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/rent-step-01.png" alt="">
          </div>

          <div class="top-rent__body-main">
            <div class="top-rent__body-title">
              <span>料金を調べる <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/common/icon-calculator.png" alt=""></span>
            </div>

            <div class="top-rent__step">
              <!-- Step 1 -->
              <div class="top-rent__step__item is-active">
                <div class="top-rent__step__head">
                  <span class="top-rent__step__num">1</span>
                  <span class="top-rent__step__title">車椅子の種類</span>
                </div>
                <button class="top-rent__step__select" id="step1Display">
                  <span class="step1-text"></span>
                  <span class="top-rent__step__arrow">≫</span>
                </button>
                <p class="top-rent__step__note">ご希望の条件を選択してください</p>
              </div>

              <div class="top-rent__step__list">
                <div class="top-rent__step__col">
                  <!-- Step 2 -->
                  <div class="top-rent__step__item top-rent__step__item--disabled is-disabled">
                    <div class="top-rent__step__head">
                      <span class="top-rent__step__num">2</span>
                      <span class="top-rent__step__title">お届け先のエリア</span>
                    </div>
                    <div class="top-rent__step__inputs">
                      <span class="js-area"></span>
                      <span class="js-city"></span>
                    </div>
                  </div>

                  <!-- Step 3 -->
                  <div class="top-rent__step__item top-rent__step__item--disabled is-disabled">
                    <div class="top-rent__step__head">
                      <span class="top-rent__step__num">3</span>
                      <span class="top-rent__step__title">レンタル日数</span>
                    </div>
                    <div class="top-rent__step__days">
                      <span class="js-days"></span>&nbsp;日
                    </div>
                  </div>
                </div>

                <button class="top-rent__step__submit js-clear-order" disabled>
                  条件を変更して再見積り ≫
                </button>
              </div>
            </div>

            <div class="estimate-summary">
              <div class="estimate-summary__inner">
                <!-- LEFT -->
                <div class="estimate-product">
                  <div class="estimate-product__head">
                    <h3 class="estimate-product__title">
                      ヘッドレスト付き
                      <span class="estimate-product__type">車いす</span>
                    </h3>
                  </div>

                  <div class="estimate-product__body">
                    <div class="estimate-product__image">
                      <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/sample.png" alt="ヘッドレスト付き">
                    </div>

                    <ul class="estimate-product__meta">
                      <li>
                        <span class="js-type"></span>
                        <small>へお届け</small>
                      </li>
                      <li>
                        <span class="js-price-per-day"></span>
                        <small>日間レンタル</small>
                        <span class="js-ship"></span>
                      </li>
                    </ul>
                  </div>

                  <ul class="estimate-product__note">
                    <li>・送料は、配送エリアに応じて変わります</li>
                    <li>・車椅子の空きについてはお電話かメールにてお問い合わせください</li>
                  </ul>
                </div>

                <!-- RIGHT -->
                <div class="estimate-result">
                  <p class="estimate-result__label">－ お見積り結果 －</p>

                  <p class="estimate-result__title">お見積り総額</p>

                  <div class="estimate-result__price">
                    <span class="estimate-result__sum">合計</span>
                    <span class="estimate-result__total js-total"></span>
                    <span class="estimate-result__yen">円</span>
                  </div>

                  <p class="estimate-result__formula">
                    <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/step-1-2-3.png" alt="">
                     <span class="estimate-result__tax">（税込）</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="top-rent__bottom">
            <h3 class="top-rent__bottom-title">
              オプション品<br>
              <span>Optional items</span>
            </h3>

            <div class="top-rent__bottom-list">
              <div class="top-rent__bottom-item">
                <div class="top-rent__bottom-box">
                  <h4 class="top-rent__bottom-sub">ヘッドレスト</h4>
                  <p>車いすに取り付けることができるヘッドサポートです。枕の位置は上下前後に自由に調整が可能です。</p>
                  <div class="top-rent__bottom-price">
                    <span>レンタル料金</span>
                    <strong>750<span>円 /日</span></strong>
                  </div>
                </div>
                <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/option-item-01.png" alt=""></figure>
              </div>

              <div class="top-rent__bottom-item">
                <div class="top-rent__bottom-box">
                  <h4 class="top-rent__bottom-sub">ボンベ架</h4>
                  <p>酸素ボンベを載せる車椅子専用のホルダーです。ベルトによって大きさの調整が可能です。</p>
                  <div class="top-rent__bottom-price">
                    <span>レンタル料金</span>
                    <strong>750<span>円 /日</span></strong>
                  </div>
                </div>
                <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/option-item-02.png" alt=""></figure>
              </div>

              <div class="top-rent__bottom-item">
                <div class="top-rent__bottom-box">
                  <h4 class="top-rent__bottom-sub">座面クッション</h4>
                  <p>安定した座位姿勢と体圧分散効果によって座圧を軽減し、快適な移動をを実現します。</p>
                  <div class="top-rent__bottom-price">
                    <span>レンタル料金</span>
                    <strong>750<span>円 /日</span></strong>
                  </div>
                </div>
                <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/option-item-03.png" alt=""></figure>
              </div>

              <div class="top-rent__bottom-item">
                <div class="top-rent__bottom-box">
                  <h4 class="top-rent__bottom-sub">テーブル</h4>
                  <p>車いすに取り付けることができるテーブルす。</p>
                  <div class="top-rent__bottom-price">
                    <span>レンタル料金</span>
                    <strong>750<span>円 /日</span></strong>
                  </div>
                </div>
                <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/option-item-04.png" alt=""></figure>
              </div>

              <div class="top-rent__bottom-item">
                <div class="top-rent__bottom-box">
                  <h4 class="top-rent__bottom-sub">転倒防止バー</h4>
                  <p>車いす本体の転倒を防止するための取り付けオプション品です。</p>
                  <div class="top-rent__bottom-price">
                    <span>レンタル料金</span>
                    <strong>750<span>円 /日</span></strong>
                  </div>
                </div>
                <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/option-item-05.png" alt=""></figure>
              </div>
            </div>

            <div class="top-rent__bottom-content">
              ご希望のオプション品につきましては、ご希望の車椅子に設置が出来ない場合もございます。くわしくは、担当のスタッフまで「ご希望の車椅子の種類」および「ご希望のオプション品」をお伝えいただき、適合可否や、空き状況につき、事前のお問い合わせをお願い致します。<br><br>ご希望の車椅子への適合と空き状況が確認できましたら、オプション品を車いすに取り付け設置をさせて頂いた上で、お届けをさせていただきます。
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="top-question">
    <div class="l-container">
      <div class="top-question__box">
        <h2 class="top-question__title">
          よくあるご質問
          <span>FAQ</span>
        </h2>

        <h3 class="top-question__sub">お届けについて</h3>
        <?php include('template-part/wheelchair-question.php') ?>
        <?php include('template-part/wheelchair-contact.php') ?>
       
      </div>
    </div>

  </section>
</main>
<?php include('template-part/wheelchair-modal.php') ?>

<?php get_footer(); ?>