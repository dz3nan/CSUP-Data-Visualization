<template>
  <navbar
    position="fixed"
    type="warning"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <div
        v-popover:popover1
        class="navbar-brand"
        style="font-size: 15px;  
     font-family: Arial, Helvetica, sans-serif; "
      ></div>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      ></el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link to="/index" class="nav-link">
          <p style="font-size: 16px;  font-family: Arial, Helvetica, sans-serif;">Prognoza</p>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/`" class="nav-link">
          <p style="font-size: 16px;  font-family: Arial, Helvetica, sans-serif;">Dijagrami</p>
        </router-link>
      </li>

     
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p  class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "../components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style >
</style>
