import React from "react";

const SchoolHistory = () => {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-20 mt-[5rem] max-w-[1440px] mx-auto">
      <div className="text-[rgb(124,124,124)] leading-[25.6px] tracking-wide max-w-[780px] mx-auto mb-[5rem]">

        {/* Section 1: Introduction */}
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-[2rem]">
          School History
        </h2>

        {/* Section 1: Introduction */}
        <section className="mb-6">
          <p>
            Sekolah Menengah Kebangsaan Suria Perdana (SUPER) telah beroperasi
            secara rasminya pada 2 Januari 2013. Pada awal pembukaannya, sekolah
            ini hanya membuat pengambilan murid kepada Tingkatan 1, 2 dan 4
            sahaja dengan jumlah murid seramai 398 orang, bilangan guru ialah 17
            orang dan 4 orang kakitangan sokongan terdiri daripada 1 orang
            pembantu tadbir, 2 orang pembantu makmal dan seorang pembantu am
            rendah.
          </p>
        </section>

        {/* Section 2: Growth Over Time */}
        <section className="mb-6">
          <p>
            Pada tahun 2023 bilangan guru bertambah kepada 50 orang, 9 orang
            kakitangan dan 660 orang murid. Pada awal pembinaan, kemudahan
            fizikal terdiri daripada 1 blok kantin dan 2 blok 4 tingkat yang
            mengandungi 30 bilik darjah, pejabat, bilik pengetua, pusat sumber,
            musollah, bilik kesihatan, bilik kaunseling, kedai buku, bilik guru,
            makmal komputer, makmal sains, bengkel kemahiran hidup dan stor am.
          </p>
        </section>

        {/* Section 3: Construction and Funding */}
        <section className="mb-6">
          <p>
            Sekolah ini dibina di bawah projek Kementerian Pelajaran Malaysia
            dan dimulakan pada tahun 2011 dengan nilaian projek kurang RM32.7
            juta. Sekolah ini dibina di atas tanah Lot 7623, Lot 754 dan
            sebahagian Lot 10759 Mukim Sri Gading. Lokasi sekolah ini terletak
            di Jalan Parit Semarang, Parit Raja, Batu Pahat.
          </p>
        </section>

        {/* Section 4: Mission and Objectives */}
        <section className="mb-6">
          <p>
            SMK Suria Perdana sebagai institusi untuk mendidik murid-murid
            peringkat sekolah menengah yang terpilih sebagai persediaan
            pengajian ke peringkat tinggi selaras dengan Falsafah Pendidikan
            Kebangsaan. Bidang-bidang yang dicakupi adalah pengajaran,
            pembelajaran, bimbingan dan pembentukan sahsiah, aktiviti
            kokurikulum, pentadbiran dan perhubungan dengan komuniti dan agensi
            luar.
          </p>
        </section>

        {/* Section 5: Leadership */}
        <section>
          <p>
            Sepanjang 12 tahun penubuhannya, SMK Suria Perdana telah diterajui
            oleh 5 orang Pengetua yang terdiri daripada:
          </p>
        </section>
      </div>

      <div className="grid grid-cols-3 gap-2">
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
  );
};

export default SchoolHistory;
