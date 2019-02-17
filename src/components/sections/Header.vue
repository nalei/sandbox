<template lang="pug">
  header
    b-navbar(toggleable="md")
      b-navbar-toggle.burger-menu(target="nav_collapse")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav
          b-nav-item(to="/" exact) Home
          b-nav-item(to="/about") About
          b-nav-item(to="/contact") Contact
</template>

<style>
/* Custom page header */
header {
  z-index: 700;
  background-color: hsla(0,0%,100%,.95);
  box-shadow: 0 2px 4px 0 rgba(73,73,73,.1);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
