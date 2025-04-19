import React from "react";
import teacher_1_img from "../../../assets/images/teacher-1.png";
import teacher_2_img from "../../../assets/images/teacher-2.png";
import teacher_3_img from "../../../assets/images/teacher-3.png";
import teacher_4_img from "../../../assets/images/teacher-4.png";

const TeachersAndStaffs = () => {
  const teachers = [
    {
      bil: 1,
      nama: "En. Azman bin Khambali",
      gred: "DG13",
      jawatan: "Pengetua",
      opsyen: "Pengajian Melayu",
    },
    {
      bil: 2,
      nama: "Pn. Halimatun bt Salleh @ Ali",
      gred: "DG13",
      jawatan: "PK Pentadbiran",
      opsyen: "Matematik",
    },
    {
      bil: 3,
      nama: "En. Rashidi bin Muhammad Safuan",
      gred: "DG12",
      jawatan: "PK HEM",
      opsyen: "B. Melayu",
    },
    {
      bil: 4,
      nama: "Pn. Hjh Aslina bt Mohd Noh",
      gred: "DG14",
      jawatan: "PK Kokurikulum",
      opsyen: "Ekonomi",
    },
    {
      bil: 5,
      nama: "Pn. Hjh Eledawati binti Jasad",
      gred: "DG12",
      jawatan: "GKMP Bahasa",
      opsyen: "Sains",
    },
    {
      bil: 6,
      nama: "En. Noor Azman bin Aziz",
      gred: "DG12",
      jawatan: "GKMP Kemanusiaan",
      opsyen: "Ekonomi",
    },
    {
      bil: 7,
      nama: "Pn. Hjh Hairani bt Razali",
      gred: "DG14",
      jawatan: "GKMP Teknik & Vokasional",
      opsyen: "P. Akaun",
    },
    {
      bil: 8,
      nama: "Pn. Hjh Norlilah binti Sackkani",
      gred: "DG13",
      jawatan: "GKMP Sains & Matematik",
      opsyen: "Bio/Kimia",
    },
    {
      bil: 9,
      nama: "Pn. Siti Khairunisa binti Jasmani",
      gred: "DG9",
      jawatan: "Penyelaras PPKI",
      opsyen: "Pend. Khas",
    },
    {
      bil: 10,
      nama: "Pn. Melur binti Baderon",
      gred: "DG14",
      jawatan: "Kaunselor /SU UBK",
      opsyen: "Kaunseling",
    },
    {
      bil: 11,
      nama: "Pn. Noorasyikin binti Jasman",
      gred: "DG10",
      jawatan: "Kaunselor/Psikometrik/Ketua Kelab BK/PRS/Pen. SU HEM",
      opsyen: "Kaunseling",
    },
    {
      bil: 12,
      nama: "Pn. Shalin Haliza binti Sapuan",
      gred: "DG9",
      jawatan: "Guru Pusat Sumber/ Bendahari PIBG/Ketua Pers. PSV",
      opsyen: "KHB",
    },
    {
      bil: 13,
      nama: "En. Fadli Hazwan bin Mohd Angawam",
      gred: "DG10",
      jawatan: "Guru Data & Media/SU BESTARI/K. Kelab Foto/K. Rumah Hijau",
      opsyen: "P. Akaun",
    },
    {
      bil: 14,
      nama: "Pn. Hairiah binti Madon",
      gred: "DG12",
      jawatan: "SU PBD/ K. Pers. BI/ Pen. SU Keceriaan Sekolah",
      opsyen: "Matematik",
    },
    {
      bil: 15,
      nama: "Pn. Hamidah binti Sharif",
      gred: "DG12",
      jawatan: "SU Pep. Dalaman PPKI/ Penyelaras Koko PPKI/ Minit Curai",
      opsyen: "Pend. Khas",
    },
    {
      bil: 16,
      nama: "En. Kamdani bin Masturi",
      gred: "DG12",
      jawatan: "SU Koperasi/K. Rumah Biru/Ketua Keusahawanan",
      opsyen: "Matematik",
    },
    {
      bil: 17,
      nama: "Pn. Masnita binti Jazi",
      gred: "DG13",
      jawatan: "SU Dialog Prestasi/Ketua PPI",
      opsyen: "Perd./Mats",
    },
    {
      bil: 18,
      nama: "En. Mohd Miza Shahril Shah bin Mohd Isa",
      gred: "DG12",
      jawatan: "KP Matematik/ SU PIBG",
      opsyen: "Matematik",
    },
    {
      bil: 19,
      nama: "En. Muhamad Hadi @ Moliyadi bin Mohimin",
      gred: "DG12",
      jawatan:
        "SU Pembangunan Perabot/SU Gerakan dan Bencana Alam/K. Rumah Kuning",
      opsyen: "Kem. Hidup",
    },
    {
      bil: 20,
      nama: "Pn. Nur Wahidatul Lailey bt Md. Zin",
      gred: "DG12",
      jawatan: "KP Sains/Pen. Pengakap/Pen. Rumah Merah",
      opsyen: "Biologi",
    },
    {
      bil: 21,
      nama: "Pn. Roslindawati binti Baharom",
      gred: "DG12",
      jawatan: "SU Peperiksaan Dalaman/SU PBS/Penolong Kadet Bomba",
      opsyen: "Sains",
    },
    {
      bil: 22,
      nama: "Cik Rosafizah binti Subiran",
      gred: "DG12",
      jawatan: "KP PJPK/SU SEGAK/Penyelaras Sukan Permainan/ K. K. Olahraga",
      opsyen: "Sains Sukan",
    },
    {
      bil: 23,
      nama: "Pn. Rozita @ Rashidah bt Abd Razak",
      gred: "DG12",
      jawatan: "KP PI/Penolong PPI",
      opsyen: "Pend. Islam",
    },
    {
      bil: 24,
      nama: "Pn. Siti Samaniah binti Maarof",
      gred: "DG12",
      jawatan: "KP Perniagaan/Ketua Disiplin/Ketua Ragbi",
      opsyen: "Perd.",
    },
    {
      bil: 25,
      nama: "Pn. Salwani binti Sahnu",
      gred: "DG12",
      jawatan:
        "Ketua Bola Baling/SU P1NCH/Kontinjen Olahraga/Pen. Rumah Kuning",
      opsyen: "Teknik & Vokasional",
    },
    {
      bil: 26,
      nama: "En. Zul-Izzi bin Daud",
      gred: "DG12",
      jawatan: "KP BI/Ketua Sepak Takraw/SU HIP",
      opsyen: "B. Inggeris",
    },
    {
      bil: 27,
      nama: "Pn. Azlina binti Hasan",
      gred: "DG10",
      jawatan: "KP Biologi/SU Kemenjadian Murid/Ketua B. Jaring",
      opsyen: "Biologi",
    },
    {
      bil: 28,
      nama: "Pn. Hida Yazmira binti Mazlan",
      gred: "DG10",
      jawatan: "KP BM/Pen. SU Sukan/MBMMBI",
      opsyen: "S. Sukan",
    },
    {
      bil: 29,
      nama: "Pn. Hidayati binti Saibon",
      gred: "DG10",
      jawatan: "KP Sejarah/SU TS25",
      opsyen: "Teknik & Vokasional",
    },
    {
      bil: 30,
      nama: "En. Mohamad Faqris bin Musa",
      gred: "DG10",
      jawatan: "KP Geografi/SU Jenayah/K. Kadet Polis",
      opsyen: "Geografi",
    },
    {
      bil: 31,
      nama: "En. Muhamad Hanafee bin Ngaimin",
      gred: "DG10",
      jawatan: "KP PSV/SU SSDM/SU 4K",
      opsyen: "PSV",
    },
    {
      bil: 32,
      nama: "En. Nor Hisham bin Abd. Rahim",
      gred: "DG10",
      jawatan: "SU Sukan/Ketua Bola Sepak/Pen. SU Perabot",
      opsyen: "KHB",
    },
    {
      bil: 33,
      nama: "En. NorHisam bin Tukiran",
      gred: "DG10",
      jawatan: "Ketua Disiplin PPKI/PAJSK PPKI",
      opsyen: "PPKI-Masalah Pembelajaran",
    },
    {
      bil: 34,
      nama: "Pn. Noorazida binti Jenal",
      gred: "DG10",
      jawatan: "SU Kokurikulum/SU Perhimpunan/PAJSK",
      opsyen: "Kem. Hidup",
    },
    {
      bil: 35,
      nama: "Pn. Nur Sazila bt Mattusar",
      gred: "DG10",
      jawatan: "SU HEM/Pen. SU UASA",
      opsyen: "Kem. Hidup",
    },
    {
      bil: 36,
      nama: "Pn. Siti Khairun Nisa binti Aman",
      gred: "DG10",
      jawatan: "KP RBT/SU SPLKPM/Pen. SU Pep. Dalaman",
      opsyen: "KHB",
    },
    {
      bil: 37,
      nama: "Pn. Umi Kalsom binti Ibrahim",
      gred: "DG10",
      jawatan: "KP Tasawur Islam/SU SPM",
      opsyen: "Pend. Islam",
    },
    {
      bil: 38,
      nama: "Pn. Hjh Wan Nazatul Shima binti Wan Mohamed",
      gred: "DG10",
      jawatan: "SU Bantuan/ KP Fizik/ Ketua K. Badminton",
      opsyen: "Matematik",
    },
    {
      bil: 39,
      nama: "Pn. Zainul Afida binti Mohd Yusoff",
      gred: "DG10",
      jawatan: "SU SPBT PPKI/SU PPKI",
      opsyen: "Pend. Khas",
    },
    {
      bil: 40,
      nama: "Pn. Zaiton binti Ismail",
      gred: "DG10",
      jawatan: "KP Kimia/ Penyelaras SPBT/ Ketua Kelab SPBT",
      opsyen: "Kimia",
    },
    {
      bil: 41,
      nama: "Pn. Zaliah binti Itam Razali",
      gred: "DG10",
      jawatan: "Penyelaras STEM/K. Kelab STEM/Pen. SU Perhimpunan",
      opsyen: "Kem. Hidup",
    },
    {
      bil: 42,
      nama: "En. Azmeer bin Marmo",
      gred: "DG9",
      jawatan: "SU Disiplin/K. Pengakap/KWAMP",
      opsyen: "Keusahawanan Perdagangan",
    },
    {
      bil: 43,
      nama: "En. Muhamad Firdaus bin Mansor",
      gred: "DG9",
      jawatan: "Penyelaras HEM PPKI/Ketua K. Olahraga PPKI",
      opsyen: "Pendidikan Khas",
    },
    {
      bil: 44,
      nama: "En. Muhamad Idzmir Shah bin Yahya",
      gred: "DG9",
      jawatan: "Penyelaras Tingkatan/Ketua Bomba",
      opsyen: "Pendidikan Islam",
    },
    {
      bil: 45,
      nama: "Pn. Nur Khairin Syafiqa binti Zakaria",
      gred: "DG9",
      jawatan: "SU Kurikulum/ Pen. SU Koperasi/ K. Permainan Tradisional",
      opsyen: "Sains Pertanian",
    },
    {
      bil: 46,
      nama: "Cik Nurul Shafiqah binti Mohd Daniar",
      gred: "DG9",
      jawatan: "SU Kajian Tindakan/Kesihatan/Pen. KRS",
      opsyen: "TESL",
    },
    {
      bil: 47,
      nama: "Pn. Nurul Ashikin binti Abu Bakar",
      gred: "DG9",
      jawatan: "Penyelaras Kurikulum PPKI/SU PASM PPKI",
      opsyen: "Pendidikan Khas",
    },
    {
      bil: 48,
      nama: "Cik Nuraisyah Thasniem binti Sharudin",
      gred: "DG9",
      jawatan: "SU Headcount/Pen. SU PSS/Ketua Kelab Rukun Negara",
      opsyen: "Sejarah",
    },
    {
      bil: 49,
      nama: "Pn. Siti Farziana binti Naim",
      gred: "DG9",
      jawatan: "SU Pengawas/Penyelaras Kelab Persatuan/K. Kelab Kebudayaan",
      opsyen: "KH",
    },
    {
      bil: 50,
      nama: "Pn. Siti Norainn binti Bahrim",
      gred: "DG9",
      jawatan: "SU Kantin/K. Pers. BM/Nilam t/Pen. Rumah Hijau",
      opsyen: "Bahasa Melayu",
    },
    {
      bil: 51,
      nama: "Pn. Siti Nur Amalina binti Kamaruddin",
      gred: "DG9",
      jawatan: "SU PLC/SU Pend. Sivik/K. Pers. Pend. Islam/Pen. BSMM",
      opsyen: "Pendidikan Islam",
    },
    {
      bil: 52,
      nama: "Pn. Siti Suhailah binti Sa'at",
      gred: "DG9",
      jawatan: "Bendahari KOOP/Ketua Kelestarian",
      opsyen: "Kej. Elektrik/Elektronik",
    },
    {
      bil: 53,
      nama: "En. Mohamad Husien bin Misran",
      gred: "DG9",
      jawatan: "SU MAKDIS/DAKWAH/Ketua K. Bola Tampar",
      opsyen: "Pendidikan Islam",
    },
    {
      bil: 54,
      nama: "En. Mohd Azammudin bin Ismail",
      gred: "DG9",
      jawatan: "SU UASA/Penyelaras B. Beruniform/Ketua KRS/Ketua Rumah Merah",
      opsyen: "Sejarah",
    },
    {
      bil: 55,
      nama: "Cik Zarith Nur Izany binti Ali Zaini",
      gred: "DG9",
      jawatan: "SU Keceriaan Sekolah/SU PAK21/K. Kelab Memanah/Dodgeball",
      opsyen: "Bahasa Inggeris",
    },
    {
      bil: 56,
      nama: "Pn. Nurul Fatina binti Jamil",
      gred: "DG9",
      jawatan: "SU KBAT/Pen. Ketua Rumah Biru/Minit Mesyuarat",
      opsyen: "Sastera Melayu",
    },
  ];

  return (
    <div className="mt-[5rem]">
      <div className="text-2xl md:text-3xl text-gray-700 bg-gray-300">
        <h1 className="max-w-[1440px] mx-auto py-5 md:py-10 px-6 md:px-12 lg:px-20">
          Teachers and Staffs
        </h1>
      </div>

      <div className="mt-[2rem]">
        <div className="grid md:grid-cols-2 gap-6 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-500">
            <img
              src={teacher_1_img}
              alt="Teacher 1"
              className="w-full max-w-[800px] object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-500">
            <img
              src={teacher_2_img}
              alt="Teacher 2"
              className="w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-500">
            <img
              src={teacher_3_img}
              alt="Teacher 3"
              className="w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-500">
            <img
              src={teacher_4_img}
              alt="Teacher 4"
              className="w-full object-cover rounded-t-lg"
            />
          </div>
        </div>

        {/* Teachers Details Table */}
        <div className="my-10 max-w-[1440px] overflow-scroll mx-auto px-6 md:px-12 lg:px-20">
          <table className="w-full border-collapse border border-gray-300 text-left md:text-sm text-xs">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">Bil</th>
                <th className="border border-gray-300 p-2">Nama</th>
                <th className="border border-gray-300 p-2">Gred SSM</th>
                <th className="border border-gray-300 p-2">
                  Jawatan / Tugas Utama
                </th>
                <th className="border border-gray-300 p-2">Opsyen</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.bil}>
                  <td className="border border-gray-300 p-2">{teacher.bil}</td>
                  <td className="border border-gray-300 p-2">{teacher.nama}</td>
                  <td className="border border-gray-300 p-2">{teacher.gred}</td>
                  <td className="border border-gray-300 p-2">
                    {teacher.jawatan}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {teacher.opsyen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeachersAndStaffs;
