import React from 'react';
import { CheckCircle, Award, Calendar, Users, BookOpen, Home, Bookmark } from 'lucide-react';

import ppk_teachers_img from "../../../assets/images/PPKI Teachers.jpg";

const SchoolHistory = () => {
  // School leaders data
  const schoolLeaders = [
    {
      id: 1,
      period: "1 Jan 2013 – 26 Dis 2014",
      name: "En. Abd. Rashid bin Sulaiman"
    },
    {
      id: 2,
      period: "27 Dis 2014 – 26 Dis 2016",
      name: "Ph. Hjh. Noriha binti Ahem"
    },
    {
      id: 3,
      period: "27 Dis 2016 – 4 Nov 2020",
      name: "Pn. Zamilah binti Ekhwan"
    },
    {
      id: 4,
      period: "1 Dis 2020 – 20 Jun 2023",
      name: "En. Madzian bin Rahmat"
    },
    {
      id: 5,
      period: "1 Okt 2023 - kini",
      name: "En. Azman bin Khambali"
    }
  ];

  // School achievements data
  const achievements = [
    "Anugerah Perak sempena sambutan bulan kem",
    "Pengurusan Kewangan Terbaik Tunas Bestari 2014",
    "Anugerah Sekolah Cemerlang Kategori Mencapai ETR 2015",
    "Anugerah Peningkatan Menguasai tertinggi tahun 2015",
    "Anugerah Peningkatan GPS Tertinggi tahun 2015",
    "Lonjakan saujana Sempena peningkatan SPM 2016",
    "Anugerah program Kelas Rancangan Usahawan (KRU) 2016",
    "Rancangan Perniagaan terbaik peringkat negeri anjuran JCorp 2017",
    "Penghargaan sebagai sekolah pengelola Karnival e-virtuAnugerah 100% layak mendapat Sijil SPM 2022",
    "Anugerah Peningkatan Gred Purata Sekolah SPM 2022",
    "Penghargaan dari PPD Batu Pahat atas kejayaan menganjurkan Karnival Perpaduan MBMMBI BAHASA INGGERIS(SM) Daerah Batu Pahat",
    "Penghargaan dari UTHM atas kerjasama menjayakan Program TVET FOR ALL 2023",
    "Anugerah 100% lulus SPM 2023"
  ];

  // Timeline events
  const timelineEvents = [
    {
      year: "2011",
      title: "Permulaan Pembinaan",
      description: "Pembinaan sekolah bermula dengan nilai projek RM32.7 juta di bawah Kementerian Pelajaran Malaysia."
    },
    {
      year: "2013",
      title: "Pembukaan Rasmi",
      description: "Beroperasi dengan 398 pelajar, 17 guru dan 4 kakitangan sokongan. Hanya menerima Tingkatan 1, 2 dan 4."
    },
    {
      year: "2014-2016",
      title: "Tempoh Pertumbuhan",
      description: "Sekolah mula mencapai kejayaan pertama dengan beberapa anugerah peringkat daerah dan negeri."
    },
    {
      year: "2023",
      title: "Sekolah Hari Ini",
      description: "Kini mempunyai 50 orang guru, 9 kakitangan dan 660 pelajar dengan pelbagai pencapaian akademik dan kokurikulum."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative text-blue-950">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1200/400')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Sejarah Sekolah</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Mengimbas perjalanan SMK Suria Perdana sejak penubuhannya pada tahun 2013 hingga kini
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Pengenalan</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Sekolah Menengah Kebangsaan Suria Perdana (SUPER) telah beroperasi
                    secara rasminya pada 2 Januari 2013. Pada awal pembukaannya,
                    sekolah ini hanya membuat pengambilan murid kepada Tingkatan 1, 2
                    dan 4 sahaja dengan jumlah murid seramai 398 orang, bilangan guru
                    ialah 17 orang dan 4 orang kakitangan sokongan terdiri daripada 1
                    orang pembantu tadbir, 2 orang pembantu makmal dan seorang
                    pembantu am rendah.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Pada tahun 2023 bilangan guru bertambah kepada
                    50 orang, 9 orang kakitangan dan 660 orang murid.
                  </p>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-blue-600">660</span>
                      <span className="text-sm text-gray-500">Pelajar</span>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-yellow-600">50</span>
                      <span className="text-sm text-gray-500">Guru</span>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-yellow-600">9</span>
                      <span className="text-sm text-gray-500">Kakitangan</span>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                      <span className="block text-3xl font-bold text-blue-600">12</span>
                      <span className="text-sm text-gray-500">Tahun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Calendar className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Garis Masa Sejarah</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute h-full w-1 bg-blue-200 left-5 md:left-1/2 transform -translate-x-1/2"></div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative">
                      {/* Dot */}
                      <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-blue-600"></div>
                      
                      {/* Content */}
                      <div className={`ml-12 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-1/2 md:pr-8 text-right' : 'md:ml-1/2 md:pl-8'
                      }`}>
                        <div className="inline-block bg-blue-50 p-4 rounded-lg shadow-sm">
                          <div className="bg-blue-600 text-white text-sm font-bold rounded-md py-1 px-2 inline-block mb-2">
                            {event.year}
                          </div>
                          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities and Construction */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Home className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Kemudahan dan Pembinaan</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Pada awal pembinaan, kemudahan fizikal terdiri daripada 1 blok
                    kantin dan 2 blok 4 tingkat yang mengandungi 30 bilik darjah,
                    pejabat, bilik pengetua, pusat sumber, musollah, bilik kesihatan,
                    bilik kaunseling, kedai buku, bilik guru, makmal komputer, makmal
                    sains, bengkel kemahiran hidup dan stor am.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Sekolah ini dibina di bawah projek Kementerian Pelajaran Malaysia dan dimulakan pada
                    tahun 2011 dengan nilaian projek kurang RM32.7 juta. Sekolah ini
                    dibina di atas tanah Lot 7623, Lot 754 dan sebahagian Lot 10759
                    Mukim Sri Gading. Lokasi sekolah ini terletak di Jalan Parit
                    Semarang, Parit Raja, Batu Pahat.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/api/placeholder/600/400" alt="School Facilities" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/api/placeholder/600/400" alt="School Building" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/api/placeholder/600/400" alt="School Campus" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/api/placeholder/600/400" alt="School Grounds" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Bookmark className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Misi dan Matlamat</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-700 font-medium italic">
                  "SMK Suria Perdana sebagai institusi untuk mendidik murid-murid
                  peringkat sekolah menengah yang terpilih sebagai persediaan
                  pengajian ke peringkat tinggi selaras dengan Falsafah Pendidikan
                  Kebangsaan."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bidang-bidang yang dicakupi adalah pengajaran,
                pembelajaran, bimbingan dan pembentukan sahsiah, aktiviti
                kokurikulum, pentadbiran dan perhubungan dengan komuniti dan
                agensi luar.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Users className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Kepimpinan Sekolah</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Sepanjang 12 tahun penubuhannya, SMK Suria Perdana telah diterajui
                oleh 5 orang Pengetua yang terdiri daripada:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Bil</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Tempoh</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Pengetua</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {schoolLeaders.map((leader) => (
                      <tr key={leader.id} className="hover:bg-blue-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{leader.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leader.period}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leader.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Award className="text-blue-600 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Pencapaian</h2>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mr-3">
                      <CheckCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <p className="text-sm text-gray-600">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Galeri Foto</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src={ppk_teachers_img} alt="School Photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolHistory;