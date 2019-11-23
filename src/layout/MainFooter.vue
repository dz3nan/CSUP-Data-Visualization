<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a >
            </a>
          </li>
          <li>
            <a >
            </a>
          </li>
          <li>
            <a >
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
       <a >
            </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
