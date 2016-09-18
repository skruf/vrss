<style lang="stylus" src="../assets/styles/main.styl"></style>

<style lang="stylus" scope>

main
  width 100vw
  height 100vh

.header
  height calc(55px - 1px)
  border-bottom 1px solid rgb(228, 232, 235)
  display flex
  justify-content space-between
  align-items center
  padding 0 15px
  .header_logo
    .logo_title
      font-weight 900
      border 2px solid #000
      padding 0px 8px
      line-height 30px
  .profile_user
    display flex
    align-items center
    .user_name
      margin-right 5px
    .user_avatar
      margin-left 10px
      .avatar_image
        width 40px
        height 40px
        border-radius 50%

</style>

<template>

  <main id="app">

    <header class="header">
      <div class="header_logo">
        <h2 class="logo_title">RSS</h2>
      </div>
      <div class="header_profile">
        <div class="profile_user">
          <span class="user_name">Pee-Wee Herman</span>
          <i class="user_icon material-icons">keyboard_arrow_down</i>
          <div class="user_avatar">
            <img class="avatar_image" src="http://vignette4.wikia.nocookie.net/epicrapbattlesofhistory/images/f/f5/Peewee.jpg/revision/latest?cb=20141119221049">
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  </main>

  <!-- <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">NSU | Resultatsystem</h5>
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Linker</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        NSU | Resultatsystem
        <a class="grey-text text-lighten-4 right" href="http://www.norsksvartkruttunion.no" target="_blank">www.norsksvartkruttunion.no</a>
      </div>
    </div>
  </footer> -->

</template>

<script>
export default {
  name: "app"
}
</script>
