import styles from "./Homepage.module.scss";

function Homepage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Più di 50 Anni di Eccellenza nella Pizza: <br /> Un Viaggio di Sapore
        </h1>
        <h3>
          Dal 1964, la nostra pizzeria è un punto di riferimento per chi cerca
          la vera pizza artigianale. Ogni giorno, utilizziamo solo ingredienti
          freschi e ricette tramandate di generazione in generazione. Con
          passione e dedizione, creiamo pizze che raccontano una storia di
          qualità e tradizione. Scopri perché i nostri clienti tornano sempre
          per un assaggio della nostra storia!
        </h3>
      </header>
      <main className={styles.main}>
        <section className={styles.intro}>
          <figure className={styles.intro_cottura}>
            <img
              className={styles.intro_cottura_img}
              src="./assets/pizza-2.jpg"
              alt="cottura forno a legna"
            />
            <figcaption className={styles.intro_cottura_caption}>
              Nel cuore della nostra pizzeria, il forno a legna è il
              protagonista indiscusso. Grazie alle sue altissime temperature,
              riusciamo a cuocere la pizza in pochi minuti, ottenendo un impasto
              soffice con una crosta croccante e dorata, proprio come vuole la
              tradizione italiana. Non è solo questione di cottura: il nostro
              forno a legna, alimentato con legna selezionata, infonde alla
              pizza quel sapore affumicato e autentico che solo la legna può
              dare. Ogni pizza che esce dal nostro forno è un capolavoro di
              gusto, frutto della nostra passione per l’autenticità, pronta a
              offrirti un’esperienza culinaria indimenticabile.
            </figcaption>
          </figure>
        </section>
        <section className={styles.comments}>
          <p className={styles.comments_text}>
            I nostri ingredienti caserecci, freschi dall’orto, sono il cuore
            delle nostre pizze. Ogni ortaggio è coltivato con cura, e solo i
            migliori finiscono sulla tua pizza. Dal sapore intenso dei pomodori
            maturati al sole, alle erbe aromatiche appena raccolte, ogni morso è
            un’esplosione di freschezza e genuinità. Con i prodotti del nostro
            orto, portiamo in tavola l’essenza della tradizione e dell’amore per
            la terra.
          </p>
          <p className={styles.comments_text}>
            Il nostro impasto lievitato è il segreto della leggerezza e del
            sapore delle nostre pizze. Realizzato con ingredienti selezionati e
            lasciato lievitare lentamente, sviluppa una consistenza perfetta:
            una crosta croccante e un interno soffice e arioso. Grazie alla
            lunga lievitazione, l’impasto diventa incredibilmente leggero e
            facilmente digeribile. È l’arte della tradizione che si fonde con la
            nostra passione, creando una pizza che celebra il gusto autentico in
            ogni morso.
          </p>
          <p className={styles.comments_text}>
            Entra nella nostra pizzeria e fai un salto indietro nel tempo,
            direttamente negli affascinanti anni '80. Qui, ogni dettaglio è
            pensato per farti rivivere l’atmosfera di un’epoca indimenticabile,
            dai mobili vintage alle luci soffuse che creano un ambiente
            accogliente e nostalgico. Goditi una pizza autentica, preparata con
            ingredienti freschi e un impasto lievitato come una volta, mentre ti
            lasci avvolgere dalla musica e dallo stile che hanno definito un
            decennio. È più di una cena, è un’esperienza che ti farà assaporare
            il gusto di un’epoca dorata, dove ogni momento è un ritorno al
            passato.
          </p>
          <p className={styles.comments_text}>
            Per te abbiamo un’altra sorpresa: non solo ingredienti caserecci
            freschi, ma anche un vino casereccio esclusivo. Questo vino,
            prodotto con metodi tradizionali e una cura artigianale, è
            l’abbinamento perfetto per le nostre pizze. Ogni sorso riflette
            l’autenticità e la passione che mettiamo nella nostra cucina,
            offrendo un'esperienza di gusto unica e genuina. Scegli il nostro
            vino casereccio per completare il tuo pasto e assaporare la vera
            essenza della tradizione.
          </p>
          <p className={styles.comments_text}>
            Prenota comodamente online per ricevere la tua pizza direttamente a
            casa.
          </p>
        </section>
        <h2 className={styles.h2}>
          Esplora il nostro menu e scopri le offerte speciali che abbiamo
          preparato per te. Cosa aspetti? Vieni a trovarci e lasciati
          conquistare dai sapori autentici e dalle promozioni imperdibili che
          rendono ogni visita unica e memorabile.
        </h2>
      </main>
    </div>
  );
}

export default Homepage;
