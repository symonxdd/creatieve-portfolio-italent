<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="voorstelling" class="section">
    <div class="intro">
      <img class="profile-pic" src="@/assets/pfp.jpg" alt="Symon Blazejczak" />
      <div class="text">
        <h1>Voorstelling</h1>
        <p>Ik ben Symon Blazejczak en ik ben 26 jaar oud. Ik ben een nieuwsgierige persoon die energie haalt uit het verkennen van nieuwe ideeën. Mijn interesses liggen uiteraard, gezien mijn studierichting, in technologie, maar meer specifiek in software bouwen die fraai, gemakkelijk en gebruiksvriendelijk is voor de eindgebruiker. Ik heb een grote passie voor mooie, simpele ontwerpen te bouwen en urenlang bezig te zijn met experimenteren van de talloze mogelijkheden die er bestaan tijdens de ontwikkeling van het ontwerpen van een softwareapplicatie.</p>

        <p>Een van mijn grootste talenten is mijn vermogen om respectvol te communiceren, vooral in gevoelige situaties bij een sterk meningsverschil bijvoorbeeld. Verder ben ik iemand die eerder liever individueel aan het werk is. In een team werken is wel geen probleem voor mij en meestal zorg ik voor voldoende lach, inspiratie en motivatie binnen de groep.</p>

        <p>Tijdens de POP-sessies heb ik ook geleerd hoe ik mijn kernkwaliteiten, zoals doorzettingsvermogen en empathie, verder kan inzetten.</p>

        <p>Over 3 tot 5 jaar zie ik mezelf werken in het buitenland, met een grote ambitie om mijn carrière te starten in Zuid-Korea. Ik ben enorm geïntrigeerd door de Koreaanse cultuur en heb al een begin gemaakt met het leren van het Koreaanse alfabet en enkele woorden. Het lijkt me een unieke kans om mijn professionele vaardigheden te combineren met het leren kennen van een totaal andere werk- en leefomgeving.</p>

        <p>Hoewel ik niet per se permanent in Zuid-Korea wil wonen, wil ik graag voor een bepaalde periode, bijvoorbeeld een of twee jaar, deze ervaring opdoen. Daarna zou ik mijn internationale carrière willen voortzetten, bijvoorbeeld in Amerika of andere Aziatische landen. Mijn doel is om mezelf voortdurend uit te dagen, nieuwe vaardigheden te ontwikkelen en wereldwijd impact te maken via mijn werk.</p>

        <p>Ik ben al goed in communiceren en creatief denken, maar ik wil mezelf zeker verder ontwikkelen in leiderschapsvaardigheden. Daarnaast wil ik leren om rustiger te denken en niet alles te overdenken, zodat ik met meer focus en zelfvertrouwen beslissingen kan nemen en uitdagingen kan aanpakken.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Voorstelling",
};
</script>

<style scoped>
.section {
  padding: 50px;
  background: #f4f4f9;
}

.intro {
  display: flex;
  align-items: center;
  gap: 30px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-pic:hover {
  transform: scale(1.1);
}

.text {
  max-width: 800px;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}
</style>
