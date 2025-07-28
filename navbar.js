document.getElementById("navbar").innerHTML = `
  <nav class="main-nav">
    <div class="logo">Zainab Cakes</div>
    <div class="menu-toggle" id="menu-toggle">&#9776;</div>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li class="dropdown">
        <a href="gallery.html">Gallery</a>
        <ul class="dropdown-content">
       <li><a href="gallery.html#categories">Categories</a></li>
<li><a href="gallery.html#themes">Themes</a></li>

        </ul>
      </li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});
