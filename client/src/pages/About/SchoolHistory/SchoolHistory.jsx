import React from "react";

const SchoolHistory = () => {
  return (
    <section className="mt-[5rem]">
      <div className="text-2xl md:text-3xl text-gray-700 bg-gray-400">
        <h1 className="max-w-[1440px] mx-auto py-10 px-6 md:px-12 lg:px-20">School history</h1>
      </div>
      <div className="px-6 md:px-12 lg:px-20 mt-[2rem] max-w-[1440px] mx-auto">
        <div className="text-[rgb(124,124,124)] leading-[25.6px] tracking-wide">
          {/* Section 1: Introduction */}
          <section className="mb-6">
            <p>
              Sekolah Menengah Kebangsaan Suria Perdana (SUPER) telah beroperasi
              secara rasminya pada 2 Januari 2013. Pada awal pembukaannya,
              sekolah ini hanya membuat pengambilan murid kepada Tingkatan 1, 2
              dan 4 sahaja dengan jumlah murid seramai 398 orang, bilangan guru
              ialah 17 orang dan 4 orang kakitangan sokongan terdiri daripada 1
              orang pembantu tadbir, 2 orang pembantu makmal dan seorang
              pembantu am rendah, Pada tahun 2023 bilangan guru bertambah kepada
              50 orang, 9 orang kakitangan dan 660 orang murid.
            </p>
          </section>

          {/* Section 2: Growth Over Time */}
          <section className="mb-6">
            <p>
              Pada awal pembinaan, kemudahan fizikal terdiri daripada 1 blok
              kantin dan 2 blok 4 tingkat yang mengandungi 30 bilik darjah,
              pejabat, bilik pengetua, pusat sumber, musollah, bilik kesihatan,
              bilik kaunseling, kedai buku, bilik guru, makmal komputer, makmal
              sains, bengkel kemahiran hidup dan stor am. Sekolah ini dibina di
              bawah projek Kementerian Pelajaran Malaysia dan dimulakan pada
              tahun 2011 dengan nilaian projek kurang RM32.7 juta. Sekolah ini
              dibina di atas tanah Lot 7623, Lot 754 dan sebahagian Lot 10759
              Mukim Sri Gading. Lokasi sekolah ini terletak di Jalan Parit
              Semarang, Parit Raja, Batu Pahat.
            </p>
          </section>

          {/* Section 3: Construction and Funding */}
          {/* <section className="mb-6">
          <p></p>
        </section> */}

          {/* Section 4: Mission and Objectives */}
          <section className="mb-6">
            <p>
              SMK Suria Perdana sebagai institusi untuk mendidik murid-murid
              peringkat sekolah menengah yang terpilih sebagai persediaan
              pengajian ke peringkat tinggi selaras dengan Falsafah Pendidikan
              Kebangsaan. Bidang-bidang yang dicakupi adalah pengajaran,
              pembelajaran, bimbingan dan pembentukan sahsiah, aktiviti
              kokurikulum, pentadbiran dan perhubungan dengan komuniti dan
              agensi luar.
            </p>
          </section>

          {/* Section 5: Leadership */}
          <section className="mb-6">
            <p>
              Sepanjang 12 tahun penubuhannya, SMK Suria Perdana telah diterajui
              oleh 5 orang Pengetua yang terdiri daripada:
            </p>

            {/* Leadership Table */}
            <table className="w-full mt-4 border-collapse border border-gray-300 text-left text-sm text-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Bil</th>
                  <th className="border border-gray-300 px-4 py-2">Tahun</th>
                  <th className="border border-gray-300 px-4 py-2">Pengetua</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1 Jan 2013 – 26 Dis 2014
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    En. Abd. Rashid bin Sulaiman
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">
                    27 Dis 2014 – 26 Dis 2016
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Ph. Hjh. Noriha binti Ahem
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                  <td className="border border-gray-300 px-4 py-2">
                    27 Dis 2016 – 4 Nov 2020
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pn. Zamilah binti Ekhwan
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1 Dis 2020 – 20 Jun 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    En. Madzian bin Rahmat
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                  <td className="border border-gray-300 px-4 py-2">
                    1 Okt 2023 - kini
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    En. Azman bin Khambali
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section 6: Achievements */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Anugerah Perak sempena sambutan bulan kem</li>
              <li>Pengurusan Kewangan Terbaik Tunas Bestari 2014</li>
              <li>Anugerah Sekolah Cemerlang Kategori Mencapai ETR 2015</li>
              <li>Anugerah Peningkatan Menguasai tertinggi tahun 2015</li>
              <li>Anugerah Peningkatan GPS Tertinggi tahun 2015</li>
              <li>Lonjakan saujana Sempena peningkatan SPM 2016</li>
              <li>Anugerah program Kelas Rancangan Usahawan (KRU) 2016</li>
              <li>
                Rancangan Perniagaan terbaik peringkat negeri anjuran JCorp 2017
              </li>
              <li>
                Penghargaan sebagai sekolah pengelola Karnival e-virtuAnugerah
                100% layak mendapat Sijil SPM 2022
              </li>
              <li>Anugerah Peningkatan Gred Purata Sekolah SPM 2022</li>
              <li>
                Penghargaan dari PPD Batu Pahat atas kejayaan menganjurkan
                Karnival Perpaduan MBMMBI BAHASA INGGERIS(SM) Daerah Batu Pahat.
              </li>
              <li>
                Penghargaan dari UTHM atas kerjasama menjayakan Program TVET FOR
                ALL 2023.
              </li>
              <li>Anugerah 100% lulus SPM 2023</li>
            </ul>
          </section>
        </div>

        {/* Section 7: Photos */}
        <div className="grid grid-cols-3 gap-2 mt-[3rem]">
          {/* Top Row */}
          <div className="col-span-2 h-60 bg-gray-300 bg-opacity-50 rounded" />
          <div className="h-60 bg-gray-300 bg-opacity-50 rounded" />

          {/* Middle Grid */}
          <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />
          <div className="row-span-2 h-full bg-gray-300 bg-opacity-50 rounded" />
          <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />

          <div className="col-span-2 h-52 bg-gray-300 bg-opacity-50 rounded" />
          <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />

          {/* Bottom Grid */}
          <div className="h-52 bg-gray-300 bg-opacity-50 rounded" />
          <div className="col-span-2 h-52 bg-gray-300 bg-opacity-50 rounded" />
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
