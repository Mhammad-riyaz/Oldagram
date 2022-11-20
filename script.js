let main = document.getElementById("container");
const posts = [
  "./project/co7f449dab271bfecdb783c89/images/post-vangogh.jpg",
  "./project/co7f449dab271bfecdb783c89/images/post-courbet.jpg",
  "./project/co7f449dab271bfecdb783c89/images/post-ducreux.jpg",
];
const avatars = [
  "./project/co7f449dab271bfecdb783c89/images/avatar-vangogh.jpg",
  "./project/co7f449dab271bfecdb783c89/images/avatar-courbet.jpg",
  "./project/co7f449dab271bfecdb783c89/images/avatar-ducreux.jpg",
];
const profiles = ["Vincent van Gogh", "Gustave Courbet", "Joseph Ducreux"];
const locations = ["Zudert, Netherlands", "Ornas, France", "Paris, France"];
const usernames = ["vincey1853", "gus1819", "jd1735"];
const captions = [
  " just took a few mushrooms lol",
  " i'm feelin a bit stressed tbh",
  " gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
];
const likes = ["21,492", "12502", "15137"];
for (let i = 0; i < 3; i++) {
  main.innerHTML += `
    <div class="sub-2">
        <div class="info">
      <div>
        <img
          src=${avatars[i]}
          alt=""
          class="avatar"
        />
      </div>
      <div class="about">
        <p><h4 class="name">${profiles[i]}</h4>
        ${locations[i]}</p>
    </div>
</div>
    <img  class="post" src=${posts[i]} alt="">
    <div class="interact">
        <img class="icon" src="./project/co7f449dab271bfecdb783c89/images/icon-heart.png" alt="">
        <img class="icon" src="./project/co7f449dab271bfecdb783c89/images/icon-comment.png" alt="">
        <img class="icon" src="./project/co7f449dab271bfecdb783c89/images/icon-dm.png" alt="">
    </div>
        <h3 class="like-count">${likes[i]} likes</h3>
        <p class="caption"><span>${usernames[i]}</span>${captions[i]} </p>
    </div>`;
}
