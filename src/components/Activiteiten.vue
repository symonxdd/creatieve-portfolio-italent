<template>
  <section id="activiteiten" class="section">
    <h1>Overzicht Activiteiten</h1>
    <p>In dit gedeelte toon ik een overzicht van mijn verplichte en extra activiteiten, gegroepeerd per domein.</p>

    <!-- Seminaries Domein -->
    <div class="activities-section">
      <h2>Seminaries</h2>
      <div class="card-container">
        <div v-for="(activity, index) in seminars" :key="index" class="card">
          <h3>{{ activity.title }}</h3>
          <p>{{ activity.description }}</p>
          <p><strong>Locatie:</strong> {{ activity.location }}</p>
          <p><strong>Datum:</strong> {{ activity.date }}</p>
        </div>
      </div>
    </div>

    <!-- Innovatie Domein -->
    <div class="activities-section">
      <h2>Innovatie</h2>
      <div class="card-container">
        <div v-for="(activity, index) in innovation" :key="index" class="card">
          <h3>{{ activity.title }}</h3>
          <p>{{ activity.description }}</p>
          <p><strong>Locatie:</strong> {{ activity.location }}</p>
          <p><strong>Datum:</strong> {{ activity.date }}</p>
        </div>
      </div>
    </div>

    <!-- Persoonlijke Ontwikkeling Domein -->
    <div class="activities-section">
      <h2>Persoonlijke Ontwikkeling</h2>
      <div class="card-container">
        <div v-for="(activity, index) in personalDevelopment" :key="index" class="card">
          <h3>{{ activity.title }}</h3>
          <p>{{ activity.description }}</p>
          <p><strong>Locatie:</strong> {{ activity.location }}</p>
          <p><strong>Datum:</strong> {{ activity.date }}</p>
        </div>
      </div>
    </div>

    <!-- Extra Activiteiten Sectie -->
<div class="activities-section">
  <h2>Extra Activiteiten</h2>

  <!-- Gluo (DevSecOps Workshop) in Seminaries -->
  <div class="card-container">
    <div class="card">
      <h3>Gluo (DevSecOps Workshop)</h3>
      <p>Praktische workshop in GitLab over het integreren van beveiliging in softwareontwikkeling en -implementatie, met tools zoals Terraform, Docker en Kubernetes om veilige cloudapplicaties te bouwen en beheren.</p>
      <p><strong>Locatie:</strong> Gluo, PXL</p>
      <p><strong>Datum:</strong> 13/11/2024, 1 dag</p>

      <!-- Bewijsstukken (Afbeeldingen) -->
      <div class="evidence">
        <img src="@/assets/gluo.jpg" alt="Afbeelding 1 van Gluo Workshop" class="evidence-image"/>
        <img src="@/assets/corda_toren.jpg" alt="Afbeelding 2 van Gluo Workshop" class="evidence-image"/>
        <img src="@/assets/selfie_gluo.jpg" alt="Afbeelding 3 van Gluo Workshop" class="evidence-image"/>
      </div>
    </div>
  </div>

  <!-- Leeratelier 'Hoe studeren' in Persoonlijke Ontwikkeling -->
  <div class="card-container">
    <div class="card">
      <h3>Leeratelier 'Hoe studeren'</h3>
      <p>In dit leeratelier leer ik mijn studiemethode verbeteren met tips en technieken, van kernideeën uit teksten halen tot effectief schematiseren. Ik krijg inzicht in de werking van het geheugen en oefen stap voor stap op een goede studiemethode.</p>
      <p><strong>Locatie:</strong> Klinisch psycholoog Jens Degroef, Campus Elfde Liniestraat - gebouw B</p>
      <p><strong>Datum:</strong> 03-04-2019, 1h30</p>
      <!-- Algemeen bewijsstuk voor de drie leerateliers -->
      <div class="evidence">
        <img src="@/assets/coach.jpg" alt="Afbeelding van de leerateliers" class="evidence-image"/>
      </div>
    </div>
  </div>

  <!-- Leeratelier 'Notities nemen' in Persoonlijke Ontwikkeling -->
  <div class="card-container">
    <div class="card">
      <h3>Leeratelier 'Notities nemen'</h3>
      <p>In dit leeratelier leer ik hoe ik effectief aantekeningen maak tijdens hoorcolleges en hoe ik deze achteraf verwerk. Met de tips die ik krijg, oefen ik meteen om mijn notities te verbeteren.</p>
      <p><strong>Locatie:</strong> Klinisch psycholoog Jens Degroef, Campus Vildersstraat - gebouw B</p>
      <p><strong>Datum:</strong> 26-03-2019, 1h30</p>
    </div>
  </div>

  <!-- Leeratelier 'Plannen' in Persoonlijke Ontwikkeling -->
  <div class="card-container">
    <div class="card">
      <h3>Leeratelier 'Plannen'</h3>
      <p>In dit leeratelier leer ik een haalbare en realistische planning maken, zodat ik beter balans vind tussen schoolwerk en vrije tijd. Met praktische tips en oefeningen ontdek ik hoe ik mijn tijd effectief kan indelen en me aan mijn planning kan houden.</p>
      <p><strong>Locatie:</strong> Klinisch psycholoog Jens Degroef, PXL-MAD</p>
      <p><strong>Datum:</strong> 03-04-2019, 1h30</p>
    </div>
  </div>

  <!-- Links naar Jens Degroef's LinkedIn en PXL e-mailadres -->
  <div class="links">
    <p><a href="https://be.linkedin.com/in/jens-degroef-ba682b4a" target="_blank">LinkedIn profiel van Jens Degroef</a></p>
    <p><a href="mailto:jens.degroef@pxl.be">PXL e-mailadres: jens.degroef@pxl.be</a></p>
  </div>

  <!-- PXL studentenjob – begeleider van de Pandix in Student Engagement -->
  <div class="card-container">
    <div class="card">
      <h3>PXL studentenjob – begeleider van de Pandix</h3>
      <p>Een studentenjob die ik deed omvatte de Pandix (Hogeschool PXL-mascotte) te begeleiden door de gangen van de ouderavond.</p>
      <p><strong>Locatie:</strong> PXL, PXL gebouw D</p>
      <p><strong>Datum:</strong> 23/11/22, 1 dag</p>

      <!-- Afbeelding van de studentenjob -->
      <div class="evidence">
        <img src="@/assets/pandix.jpg" alt="Afbeelding van Pandix studentenjob" class="evidence-image"/>
      </div>
    </div>
  </div>

</div>

  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Activiteiten",
  data() {
    return {
      seminars: [
        {
          title: "NoComputer (Prompt Engineering)",
          description: "Een introductie in het ontwerpen en optimaliseren van prompts om AI-modellen efficiënt te laten presteren.",
          location: "nocomputer, PXL",
          date: "23/10/2024, 1 dag"
        },
        {
          title: "IBM: Discover the meeting point of GenAI, Prompt Engineering, and Quantum Computing",
          description: "Verkenning van de interactie tussen Generatieve AI, prompt engineering en de innovatieve toepassingen van quantum computing. ",
          location: "IBM, PXL",
          date: "06/11/2024, 1 dag"
        },
        {
          title: "Politie (Intro into Digital Forensics)",
          description: "Inleiding in digitale forensische technieken en hoe deze worden ingezet voor onderzoek en beveiliging.",
          location: "Politie, PXL",
          date: "04/12/2024, 1 dag"
        },
        {
          title: "TheValueChain (SAP: AI en process automation)",
          description: "Inzicht in hoe SAP bedrijfsprocessen ondersteunt en hoe AI en procesautomatisering worden ingezet voor maatwerkoplossingen.",
          location: "TheValueChain, PXL",
          date: "13/12/2023, 1 dag"
        },
        {
          title: "ACA Group: Unlock high-velocity teams with Jira Service Management",
          description: "Demonstratie van hoe Jira Service Management teams helpt sneller en efficiënter te werken door processen te optimaliseren en flexibiliteit te vergroten.",
          location: "ACA Group, PXL",
          date: "30/11/2022, 1 dag"
        },
        {
          title: "EASI: The role of Power Apps in a modern workplace",
          description: "Praktische sessie over het ontwikkelen van digitale toepassingen met Microsoft Power Apps om handmatige en tijdrovende processen te automatiseren en efficiënter te maken.",
          location: "EASI, PXL",
          date: "14/12/2022, 1 dag"
        },
        {
          title: "Solita (iPaaS)",
          description: "Hands-on workshop over iPaaS (Integration Platform as a Service) en hoe het complexe integraties eenvoudig maakt met Azure en SnapLogic.",
          location: "Solita, PXL",
          date: "11/01/2023, 1 dag"
        },
        {
          title: "EASI Laravel",
          description: "Inleiding in API-first webontwikkeling met Laravel en Vue.js, gericht op het bouwen van efficiënte webtoepassingen.",
          location: "EASI, PXL",
          date: "19/04/2022, 1 dag"
        },
        {
          title: "Harmony Group (The rise of low code)",
          description: "Workshop over het ontwikkelen van mobiele apps met het low-code platform OutSystems, inclusief installatie en gebruik van de ontwikkelomgeving.",
          location: "Harmony Group, PXL",
          date: "03/05/2022, 1 dag"
        },
      ],
      innovation: [
        {
          title: "Innovatieroute UI/UX",
          description: "Een diepgaande kennismaking met UX/UI-design, inclusief onderzoeksmethoden, psychologische principes, design thinking en tools zoals Figma en Miro. De sessies behandelden het ontwerpen van gebruiksvriendelijke en toegankelijke digitale producten, inclusief hands-on technieken voor mobile design, prototyping en usability testing.",
          location: "HUMIX & AppFoundry, PXL",
          date: "28/09/2023, 05/10/2023 en 19/10/2023, 3 dagen"
        },
        {
          title: "Interne hackathon PXL Digital",
          description: "Buzzwatch, een onderzoeksproject over bijen in een samenwerking tussen het Vlaams Bijeninstituut, PXL en Plantsoon.",
          location: "Vlaams Bijeninstituut, PXL en Plantsoon; PXL",
          date: "13/02/2024 en 14/02/2024, 2 dagen"
        },
      ],
      personalDevelopment: [
        {
          title: "Projectweek 2TIN",
          description: "Een week gericht op persoonlijke ontwikkeling en teamwerking, als voorbereiding op het starten van een onderzoeksproject.",
          location: "PXL, PXL",
          date: "14/02/2022 t.e.m. 18/02/2022, 1 week"
        },
        {
          title: "POP-sessie 2TIN - Brein aan het werk",
          description: "In deze POP-sessie krijg ik inzicht in mijn schermgebruik en ontdek ik hoe kleine afleidingen mijn productiviteit en focus beïnvloeden.",
          location: "Learning Path, PXL",
          date: "08/03/2022, 2u"
        },
        {
          title: "POP-sessie 2TIN - POPping",
          description: "In deze POP-sessie werk ik aan een betere teamdynamiek door via speelse oefeningen positieve eigenschappen van mijn teamleden te ontdekken en benoemen.",
          location: "Learning Path, PXL",
          date: "08/03/2022, 2u"
        },
        {
          title: "POP-sessie 3TIN - My Team and I",
          description: "In deze workshop ontdek ik hoe mijn projectgroep functioneert volgens het model van Lencioni en leer ik hoe ik de lagen van vertrouwen, conflict, betrokkenheid, verantwoordelijkheid en resultaatgerichtheid kan versterken om als een effectief team te werken.",
          location: "Learning Path, PXL",
          date: "18/10/2023, 2u"
        },
      ]
    };
  }
};
</script>

<style scoped>
.section {
  padding: 50px;
  background: #fff;
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

.activities-section {
  margin-bottom: 50px;
}

h2 {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #7f8c8d;
}

.card p strong {
  color: #2c3e50;
}

.evidence {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.evidence-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.evidence-image:hover {
  transform: scale(1.05);
}
</style>
