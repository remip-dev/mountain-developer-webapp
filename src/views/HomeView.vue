<template>
  <div class="page-container">
    <div class="section-container section-one">
      <div class="fm-image-container">
        <ResponsiveImage
          class="follow-me-img"
          :smallImage="smallFollowMe"
          :mediumImage="mediumFollowMe"
          :largeImage="largeFollowMe"
          alt="Un montagnard, sac à dos au sol, devant des montagnes. Texte : 'Suivez-moi' pointant vers le bas"
        />
      </div>
      <div class="text-container">
        <h1>Le développeur montagnard</h1>
        <h2 class="intro">
          Passionné de <span>développement</span> et de <span>montagne</span>, je vous propose de
          monter une expédition <span>Freelance</span> pour arriver à l'application de vos rêves !
        </h2>
      </div>
    </div>
    <div class="section-container section-two">
      <div class="text-container speciality-txt">
        <h2>Développeur Full Stack, créateur de solutions web sur mesure</h2>
        <p>
          Vous souhaitez concevoir une <span>solution digitale complète</span> ? Que ce soit un
          simple <span>site vitrine</span> ou une <span>application plus complexe</span>, je suis là
          pour vous accompagner <span>de A à Z</span>.
        </p>
        <p>
          Spécialisé en développement web, je maîtrise
          <span>l’ensemble des aspects techniques</span>, du frontend au backend, avec une expertise
          en Node.js, TypeScript et API REST. Je vous propose des solutions <span>robustes</span>,
          <span>maintenables</span> et <span>évolutives</span>, tout en assurant la gestion et le
          déploiement de votre projet
        </p>
        <p>
          Avec moi, vous avez un <span>interlocuteur unique</span> pour une solution web clé en
          main.
        </p>
      </div>
      <div class="md-image-container">
        <ResponsiveImage
          class="map-drawing-img"
          :smallImage="smallDrawing"
          :mediumImage="mediumDrawing"
          :largeImage="largeDrawing"
          alt="Un homme qui dessine une carte"
        />
      </div>
    </div>
    <div class="section-three">
      <MySkills />
    </div>
    <div class="section-button">
      <SimpleButton @clicked="handleClickButton" text="PRENEZ CONTACT !" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import smallFollowMe from '@/assets/images/followMe/follow_me_small.webp'
import mediumFollowMe from '@/assets/images/followMe/follow_me_medium.webp'
import largeFollowMe from '@/assets/images/followMe/follow_me_large.webp'
import smallDrawing from '@/assets/images/mapDrawing/map_drawing_small.webp'
import mediumDrawing from '@/assets/images/mapDrawing/map_drawing_medium.webp'
import largeDrawing from '@/assets/images/mapDrawing/map_drawing_large.webp'
import MySkills from '@/components/mySkills/MySkills.vue'
import SimpleButton from '@/components/SimpleButton.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  components: {
    ResponsiveImage,
    MySkills,
    SimpleButton
  },
  setup() {
    const router = useRouter()

    function handleClickButton() {
      router.push({ name: 'contact' })
    }

    return {
      smallFollowMe,
      mediumFollowMe,
      largeFollowMe,
      smallDrawing,
      mediumDrawing,
      largeDrawing,
      handleClickButton
    }
  }
})
</script>

<style scoped>
.section-container {
  display: flex;
  flex-direction: row;
}

.section-one {
  height: 600px;
}

.section-two {
  height: 700px;
}

.section-three {
  margin: 100px 0px;
}

.section-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
}

.fm-image-container,
.md-image-container,
.text-container {
  flex: 1;
}

.speciality-txt {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.fm-image-container,
.md-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fm-image-container {
  justify-content: end;
}

.md-image-container {
  justify-content: center;
}

.follow-me-img {
  width: 100%;
  max-width: 700px;
}

.map-drawing-img {
  max-height: 600px;
  max-width: 507.75px;
  width: 100%;
}

.intro {
  font-weight: 300;
  text-align: justify;
}

span {
  font-weight: 700;
  color: var(--tertiary-color);
}

@media (max-width: 1220px) {
  .section-one {
    height: 450px;
  }

  .section-two {
    height: 550px;
  }
}

@media (max-width: 1000px) {
  .section-one {
    height: 650px;
    flex-direction: column;
  }

  .section-two {
    height: 750px;
    flex-direction: column-reverse;
  }

  .follow-me-img {
    width: 85%;
    max-width: 700px;
  }

  .map-drawing-img {
    max-height: 600px;
    max-width: 507.75px;
    width: 50%;
  }
}

@media (max-width: 600px) {
  .text-container h2 {
    font-size: var(--tablet-normal-font-size);
  }

  .section-one {
    height: 400px;
  }

  .section-two {
    height: 600px;
  }
}

@media (max-width: 400px) {
  .section-two {
    height: 700px;
  }
}
</style>
