import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import CertificateModal from "./CertificateModal";

import dioPython from "@/assets/certificates/fpf_dio.webp";
import udemyPentest from "@/assets/certificates/pehes_udemy.webp";
import udemyWifi from "@/assets/certificates/tdiarsf_udemy.webp";
import udemyEthical from "@/assets/certificates/fdeh_udemy.webp";
import linuxBeginner from "@/assets/certificates/lbico_4linux.webp";
import linuxHtml from "@/assets/certificates/mwch_4linux.webp";
import linuxFund from "@/assets/certificates/lf_4linux.webp";
import linuxDevops from "@/assets/certificates/de_4linux.webp";
import linuxBigData from "@/assets/certificates/bde_4linux.webp";
import linuxBeginnerDev from "@/assets/certificates/bd_4linux.webp";
import linuxLogs from "@/assets/certificates/adl_4linux.webp";

type Cert = { title: string; img: string };

const DIO: Cert[] = [{ title: "Formação Python Fundamentals", img: dioPython }];
const UDEMY: Cert[] = [
  { title: "Pentest e Hacking em Sites", img: udemyPentest },
  { title: "Técnicas de Invasão WiFi", img: udemyWifi },
  { title: "Fundamentos de Ethical Hacking", img: udemyEthical },
];
const LINUX: Cert[] = [
  { title: "Linux Beginner In Cloud", img: linuxBeginner },
  { title: "Mundo web com HTML5", img: linuxHtml },
  { title: "Linux Fundamentals", img: linuxFund },
  { title: "DevOps Essentials", img: linuxDevops },
  { title: "Big Data Essentials", img: linuxBigData },
  { title: "Beginners Developer", img: linuxBeginnerDev },
  { title: "Auditoria de Logs", img: linuxLogs },
];

const Education = () => {
  const [modal, setModal] = useState<Cert | null>(null);
  const { t } = useLang();

  const Column = ({ prov, list }: { prov: string; list: Cert[] }) => (
    <div className="box cert">
      <div className="prov">{prov}</div>
      <ul>
        {list.map((c) => (
          <li key={c.title} onClick={() => setModal(c)}>{c.title}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="section" id="certificacoes">
      <div className="wrap">
        <div className="section-head">
          <div className="label">{t("edu.label")}</div>
          <h2>{t("edu.title")}</h2>
        </div>
        <div className="cert-grid">
          <Column prov="DIO" list={DIO} />
          <Column prov="Udemy" list={UDEMY} />
          <Column prov="4Linux" list={LINUX} />
        </div>
      </div>
      <CertificateModal
        open={!!modal}
        image={modal?.img}
        title={modal?.title}
        onClose={() => setModal(null)}
      />
    </section>
  );
};

export default Education;
