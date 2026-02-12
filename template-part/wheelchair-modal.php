<!-- Overlay -->
<!-- step1 -->
<div class="wheelchair-modal" id="wheelchairModal">
  <div class="wheelchair-modal__box">
    <!-- Header -->
    <div class="wheelchair-modal__header">
      <h3>
        <span class="num">1</span>
        車いすの種類を選ぶ
      </h3>
      <button class="close-btn" id="closeWheelchairPopup">×</button>
    </div>

    <!-- Tabs -->
    <ul class="wheelchair-modal__tabs">
      <li class="is-active">車いす種類</li>
      <li>お届け先エリア</li>
      <li>日数</li>
    </ul>

    <!-- List -->
    <div class="wheelchair-modal__list">
      <!-- item -->
      <div class="wheelchair-item" data-id="1" data-title="両式（自走・介助）" data-prices='{
            "1": 3300,
            "3": 3800,
            "7": 4500,
            "14": 5300,
            "30": 6500
          }'>
        <div class="wheelchair-item__info">
          <span class="badge"></span>
          <div>
            <p class="title">両式（自走・介助）</p>
            <p class="price">レンタル料金　<span>750</span>円/日</p>
          </div>
        </div>
        <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/img-popup.png" alt="">
      </div>

      <div class="wheelchair-item" data-id="1" data-title="両式1111111" data-prices='{
            "1": 5000,
            "3": 6000,
            "7": 7000,
            "14": 8000,
            "30": 9000
          }'>
        <div class="wheelchair-item__info">
          <span class="badge"></span>
          <div>
            <p class="title">両式11111</p>
            <p class="price">レンタル料金　<span>750</span>円/日</p>
          </div>
        </div>
        <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/img-popup.png" alt="">
      </div>

    </div>
  </div>
</div>
 <!-- step2 -->
<div class="wheelchair-modal" id="areaModal">
  <div class="wheelchair-modal__box">

    <!-- Header -->
    <div class="wheelchair-modal__header">
      <h3>
        <span class="num">2</span>
        お届け先のエリアを選ぶ
      </h3>
      <button class="close-btn" id="closeAreaPopup">×</button>
    </div>
    
    <!-- Tabs -->
    <ul class="wheelchair-modal__tabs">
      <li class="is-completed">車いす種類</li>
      <li class="is-active">お届け先エリア</li>
      <li>日数</li>
    </ul>

    <!-- Body -->
    <div class="wheelchair-modal__list">

      <!-- overlay -->
      <div class="city-overlay"></div>

      <!-- Prefecture -->
      <div class="area-block">
        <h4 class="area-title">都道府県</h4>
        <div class="area-list area-list--vertical">
          <label class="area-item">
            <input type="radio" name="prefecture" value="東京都">
            <span>東京都</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="神奈川県">
            <span>神奈川県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="埼玉県">
            <span>埼玉県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="千葉県">
            <span>千葉県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="茨城県">
            <span>茨城県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="栃木県">
            <span>栃木県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="埼玉県">
            <span>埼玉県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="神奈川県">
            <span>神奈川県</span>
          </label>
          <label class="area-item">
            <input type="radio" name="prefecture" value="静岡県">
            <span>静岡県</span>
          </label>
        </div>
      </div>

      <!-- City -->
      <div class="area-block area-block--city">
        <div class="city-popup">

          <!-- Prefecture label (vertical text) -->
          <div class="city-prefecture">
            <span class="js-selected-prefecture">東京都</span>
          </div>

          <!-- City list -->
          <div class="city-content">
            <h4 class="area-title">区市町村</h4>
            <div class="area-list area-list--vertical" id="cityList">
              <!-- render bằng JS -->
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
 <!-- step3 -->
<div class="wheelchair-modal" id="daysModal">
  <div class="wheelchair-modal__box">
    <!-- Header -->
    <div class="wheelchair-modal__header">
      <h3>
        <span class="num">3</span>
        レンタル日数を選ぶ
      </h3>
      <button class="close-btn" id="closeDayPopup">×</button>
    </div>

    <!-- Tabs -->
    <ul class="wheelchair-modal__tabs">
      <li class="is-completed">車いす種類</li>
      <li class="is-completed">お届け先エリア</li>
      <li class="is-active">日数</li>
    </ul>

    <!-- Content -->
    <div class="wheelchair-modal__list">

      <p class="days-title">利用日数を選択する</p>

      <div class="days-grid" id="daysGrid">
        <!-- JS render 1〜31 -->
      </div>

      <p class="days-note">
        ※ 1ヶ月以上ご利用予定の場合は「31日」を押下してください
      </p>

    </div>
  </div>
</div>
<!-- step4 : Result -->
<div class="wheelchair-modal" id="resultModal">
  <div class="wheelchair-modal__box wheelchair-modal__box--result">

    <!-- Header -->
    <div class="wheelchair-modal__header wheelchair-modal__header--logo">
      <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/common/logo-header.png" alt="">
      <button class="close-btn" id="closeResultPopup">×</button>
    </div>

    <h3 class="result-title">‐お見積り結果-</h3>

    <div class="result-box">
      <!-- Total -->
      <div class="result-head">
        <h4 class="result-head__title"><span>お見積り総額</span></h4>
        <div class="result-head__total">
          <p class="result-head__label">合計</p>
          <p class="result-head__price">
            <span class="js-result-total">0</span>円
            <small>（税込）</small>
          </p>
        </div>
        <div class="result-head__note">
          <span>車いす即日レンタル　スグー</span>
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/img-wheelchair-result.png" alt="">
        </div>

        <!-- Detail -->
        <div class="result-detail">
          <h3 class="result-detail__title"><span class="js-result-type"></span>車いす</h3>
          <div class="result-detail__info">
            <figure><img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/sample.png" alt=""></figure>
            <div class="result-detail__content">
              <p>
                <span class="js-result-prefecture"></span><span class="js-result-city"></span> お届け
              </p>
              <p>
                <span class="js-result-days"></span> レンタル
              </p>
            </div>
          </div>
          <!-- <p>
            配送料：<span class="js-result-ship"></span>円
          </p> -->
        </div>
      </div>

       <!-- CTA -->
      <div class="result-cta">
        <h3 class="result-cta__title">お申込みはこちら</h3>
        <div class="result-cta__list">
          <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/icon-telephone.png" alt="">
          <div class="result-cta__tel">0120-223-365</div>
        </div>
        <div class="result-cta__note">365日 年中無休　8:00〜21:00</div>
      </div>
    </div>

    <div class="result-customer">
      <div class="result-customer__info">
        <img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/top/customer.png" alt="">
        <p>レンタルに関する<br>ご不明点やご不安がございましたら<br>お気軽にご相談くださいませ。</p>
      </div>
      <div class="result-customer__content">専門のスタッフが誠心誠意ご対応致します</div>
    </div>

    <div class="result-copyright">Personal  Life Japan Corp.</div>
  </div>
</div>