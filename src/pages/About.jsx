import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./About.module.scss";

function About() {
  const position = [41.89848692508024, 12.42875115366694];

  // URL per le indicazioni stradali su Google Maps
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  return (
    <main className={styles.container}>
      <h2 className={styles.description}>
        Ci troviamo in <strong>Via Aurelia 427</strong>.
        <br />
        Scopri come puoi raggiungerci:
      </h2>
      <div className={styles.openingHours}>
        <h2 className={styles.hoursTitle}>Orari di apertura:</h2>
        <ul className={styles.hoursList}>
          <li className={styles.hoursItem}>
            <strong>Lunedì:</strong> Chiuso
          </li>
          <li className={styles.hoursItem}>
            <strong>Martedì:</strong> 18:00 - 24:00
          </li>
          <li className={styles.hoursItem}>
            <strong>Mercoledì:</strong> 18:00 - 24:00
          </li>
          <li className={styles.hoursItem}>
            <strong>Giovedì:</strong> 18:00 - 24:00
          </li>
          <li className={styles.hoursItem}>
            <strong>Venerdì:</strong> 18:00 - 24:00
          </li>
          <li className={styles.hoursItem}>
            <strong>Sabato:</strong> 18:00 - 24:00
          </li>
          <li className={styles.hoursItem}>
            <strong>Domenica:</strong> 18:00 - 24:00
          </li>
        </ul>
      </div>
      <section className={styles.map_section}>
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Ottieni indicazioni stradali
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </main>
  );
}

export default About;
