# Alexia Granato Yoga & Maternità 🌿

Sito web elegante, moderno e responsive per **Alexia Granato Yoga & Maternità**, realizzato a partire dai contenuti di [`content.md`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/content.md) e ispirato all'estetica, alla tipografia e al layout di [Practice Feel Glow](https://www.practicefeelglow.com/).

---

## 🎨 Design System & Estetica (Ispirazione Practice Feel Glow)

* **Palette Colori Naturale:**
  - `Sfondo Principale`: Lino caldo / alabastro (`#F7F4F0`)
  - `Sfondo Secondario`: Grigio pietra caldo (`#EFEAE4`)
  - `Testo Primario`: Carbone profondo naturale (`#1D1E1B`)
  - `Accento Sage Green`: Verde salvia botanico (`#5A6659`)
  - `Accento Chiaro`: Salvia delicato / highlight (`#CFD3C5`)
  - `Sezione Notte / Bosco`: Verde bosco profondo (`#1E281F`)
* **Tipografia Editoriale:**
  - *Titoli principali (H1, H2):* **Arsenal** (maiuscolo, spaziatura generosa `0.14em`)
  - *Sottotitoli & Badge (H3, H4):* **Montserrat** (maiuscolo, spaziatura ampia `0.26em - 0.32em`)
  - *Corpo del Testo:* **Poppins** (leggibile, rilassante, line-height `1.85`)
  - *Citazioni filosofiche:* **Arsenal / Corsivo Serif**
* **Interazioni PFG:**
  - *Effetto Navigazione:* Al passaggio del mouse sui link del menu, i link vicini sfumano delicatamente in trasparenza (`opacity: 0.4`), focalizzando l'attenzione sull'elemento attivo.
  - *Navbar Sticky con Blur:* Trasparenza progressiva e sfocatura dello sfondo allo scorrimento.
  - *Floating WhatsApp:* Tasto WhatsApp fisso in basso a destra con badge e messaggio precompilato.

---

## 📱 Struttura dei Contenuti & Funzionalità

Tutti i testi di [`content.md`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/content.md) sono stati organizzati e valorizzati:

1. **Top Announcement Bar:** Avviso discreto per i percorsi attivi 2026 nelle quattro sedi con pulsante di chiusura.
2. **Hero Section (Copertina Principale):** Titolo guida *"Rallenta. Ascoltati. Custodisci il tuo equilibrio."*, lead di presentazione, badge di formazione (BWY, Maternità, Gruppi piccoli) e pulsanti di chiamata all'azione.
3. **Pillastri della Pratica (Trio PFG "Corpo. Mente. Respiro."):**
   - `01 / CORPO`: Movimento Consapevole & Hatha Yoga
   - `02 / MENTE`: Regolazione del Sistema Nervoso & Calma
   - `03 / RESPIRO`: Connessione Profonda & Preparazione al Parto
4. **Catalogo Corsi Interattivo con Filtri:**
   - *Hatha Yoga per la Donna* (con focus Yogalates e benefici interiori)
   - *Yoga in Gravidanza e per il Parto* (con respiro, strumenti per il parto e incontri con ostetrica)
   - *Yoga Post Parto Mamma-Bebè* (40 giorni - 10 mesi)
   - *Sviluppo Infantile (0-24 mesi)* (con badge per fasce d'età: 0-3m, 3-6m, 6-9m, 9-14m, 14-24m)
   - *Yoga Bimbi (1-3 anni)*
   - *Percorso "Dal Grembo ai Primi Passi"* (consulenza 1-to-1)
   - *Riti di Passaggio (Blessingway) ed Eventi Famiglia* (musica, storie e bagni di suoni)
5. **Banner Citazioni Filosofiche a Scorrimento Automatico:**
   - *"Un asana è uno stato di attenzione, privo di tensione"* — A.G. Mohan
   - *"Lo yoga è il viaggio del sé, attraverso il sé, verso il sé"* — Bhagavad Gita
   - *"Dalla pienezza sorge la pienezza..."* — Purnam Mantra
6. **Chi Sono / La Mia Storia & Formazione Ufficiale:**
   - Percorso personale di Alexia (dal superamento del mal di schiena e stress all'esperienza in gravidanza).
   - Griglia completa di accreditamenti (Diploma BWY British Wheel of Yoga, Yogalates, Yoga Gravidanza & Coppia, Post Parto, Sviluppo 0-24m, Infanzia 1-14 anni).
7. **Recensioni / Testimonianze:** Esperienze autentiche di allieve e neomamme.
8. **Le Sedi sul Territorio:** Lanzo Torinese, Ciriè, Robassomero e Venaria Reale.
9. **Call to Action Scuro ad Alto Contrasto:** Invito diretto per prenotare una lezione di prova o avviare una chat WhatsApp immediata.
10. **Form di Contatto & Newsletter:** Modulo di iscrizione con selezione sede e corso, più modulo newsletter conforme alla privacy.
11. **Modal di Prenotazione Intelligente:** Permette all'utente di scegliere tra messaggio WhatsApp istantaneo precompilato (con corso e sede prescelta) o form email tradizionale.

---

## 🚀 Come Visualizzare il Sito in Locale

Puoi avviare il server locale con uno qualsiasi di questi comandi:

```bash
# Con npx / npm
npm start
# oppure
npx serve . -p 3000

# Oppure con Python
python3 -m http.server 3000
```

Apri quindi il tuo browser all'indirizzo [http://localhost:3000](http://localhost:3000).

---

## 📂 File del Progetto

- [`index.html`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/index.html): Pagina principale completa e SEO-friendly.
- [`chi-sono.html`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/chi-sono.html): Sottopagina dedicata alla bio, al percorso personale e alle certificazioni.
- [`contatti.html`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/contatti.html): Sottopagina dedicata a sedi, recapiti WhatsApp ed email.
- [`styles.css`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/styles.css): Foglio di stile CSS personalizzato ispirato a Practice Feel Glow.
- [`main.js`](file:///Users/fproj/github.com/fprojetto/alexiagranatoyoga/main.js): Gestione interazioni (filtri, modal, carosello citazioni, menu responsive, WhatsApp builder).
- `assets/images/`: Immagini ottimizzate ad alta risoluzione e grafiche vettoriali SVG per logo, brand mark e favicon.
