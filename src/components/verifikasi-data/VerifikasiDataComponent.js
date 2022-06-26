import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../dashboard-components/Header";
import "./verifikasi.css";
import { Link } from "react-router-dom";

function VerifikasiDataComponent() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="title">
          <h5>Verifikasi dan Validasi Data Siswa</h5>
        </div>
        <div class="alert alert-warning" role="alert">
          <strong>Data Siswa Belum Terverifikasi</strong>
          <p>Anda belum melakukan simpan permanen. Mohon memeriksa dan mengisikan data dengan seksama dan
             pastikan data anda sudah benar sebelum simpan permanen
          </p>
        </div>

        <div className="card spacing">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">Verifikasi dan Melengkapi Data Pribadi</h6>
            <p class="card-text">
              <li>
                  Periksa dengan seksama dan lengkapi data pribadi di laman ini, Jika terdapat
                  kesalahan data nama, tempat lahir, tanggal lahir, dan jenis kelamin dapat
                  dilakukan perbaikan data di Dapodik melalui operator sekolah.
              </li>
              <li>
                  Siswa dengan status aktif atau belum lulus mohon untuk menghubungi pihak sekolah
                  untuk melakukan perbaikan data. Untuk siswa yang telah melakukan perbaikan data di 
                  http://nisn.data.kemdikbud.go.id dan memilih menu verifikasi dan validasi lulusan.
              </li>
              <li>
                  Setelah perbaikan data dilakukan Anda dapat menekan tombol Perbarui Data untuk memperbarui
                  data Anda di laman ini., Jangan melakukan simpan permanen sebelum semua data yang tercantum benar.
              </li>
            </p>
          </div>
        </div>

        <div class="card spacing">
            <h6 class="title">Data Pribadi</h6>
            <div class="card-body">
              <table class="table-sm table-borderless mb-3">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="right-align">NISN</td>
                    <td><strong>332323232323</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Nama Siswa</td>
                    <td><strong>Sallie Trixie Zebada Mansurina</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Jenis Kelamin</td>
                    <td><strong>Perempuan</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Tempat Lahir</td>
                    <td><strong>MEDAN</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Tanggal Lahir</td>
                    <td><strong>15 JUNI 2003</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">NIK</td>
                    <td><strong>3312101506030001</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Agama</td>
                    <td>
                      <select class="form-select form-select-sm" aria-label=".form-select-sm example" placeholder="Pilih Agama">
                        <option value="1">Islam</option>
                        <option value="2">Kristen</option>
                        <option value="3">Katolik</option>
                        <option value="4">Hindu</option>
                        <option value="5">Buddha</option>
                        <option value="6">Konghuchu</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="right-align">Alamat Domisili</td>
                    <td>
                      <div class="md-3">
                        <p>Jalan</p>
                        <input type="text" class="form-control spacing" id="exampleFormControlInput1" placeholder="Masukkan Nama Jalan"/>
                      </div>
                      <div class="md-3">
                        <p>Provinsi</p>
                        <select class="form-select form-select-sm spacing" aria-label=".form-select-sm example" placeholder="Pilih Provinsi">
                          <option value="1">Jawa Tengah</option>
                          <option value="2">Kalimantan Utara</option>
                          <option value="3">Sumatera Barat</option>
                          <option value="4">Bali</option>
                          <option value="5">Sulawesi Tenggara</option>
                          <option value="6">Papua</option>
                        </select>
                      </div>
                      <div class="md-3">
                        <p>Kota/Kabupaten</p>
                        <select class="form-select form-select-sm spacing" aria-label=".form-select-sm example" placeholder="Pilih Kabupaten">
                          <option value="1"> </option>
                          <option value="2"> </option>
                          <option value="3"> </option>
                          <option value="4"> </option>
                          <option value="5"> </option>
                          <option value="6"> </option>
                        </select>
                      </div>
                      <div class="md-3">
                        <p>Kecamatan</p>
                        <select class="form-select form-select-sm spacing" aria-label=".form-select-sm example" placeholder="Pilih Kecamatan">
                          <option value="1"> </option>
                          <option value="2"> </option>
                          <option value="3"> </option>
                          <option value="4"> </option>
                          <option value="5"> </option>
                          <option value="6"> </option>
                        </select>
                      </div>
                      <div class="md-3">
                        <p>RT</p>
                        <input type="text" class="form-control spacing" id="exampleFormControlInput1" placeholder="Masukkan RT"/>
                      </div>
                      <div class="md-3">
                        <p>RW</p>
                        <input type="text" class="form-control spacing" id="exampleFormControlInput1" placeholder="Masukkan RW"/>
                      </div>
                      <div class="md-3">
                        <p>Kode Pos</p>
                        <input type="text" class="form-control spacing" id="exampleFormControlInput1" placeholder="Masukkan Kode Pos"/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="right-align">Email</td>
                    <td><strong>email@gmail.com</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Nomor Handphone</td>
                    <td>
                      <div class="md-3">
                        <input type="text" class="form-control spacing" id="exampleFormControlInput1" placeholder="Masukkan Nomor Handphone"/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="right-align">Penghasilan Ayah</td>
                    <td>
                      <div class="md-3">
                          <select class="form-select form-select-sm spacing" aria-label=".form-select-sm example" placeholder="Pilih Kecamatan">
                            <option value="1"> </option>
                            <option value="2"> </option>
                            <option value="3"> </option>
                            <option value="4"> </option>
                            <option value="5"> </option>
                            <option value="6"> </option>
                          </select>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="right-align">Penghasilan Ibu</td>
                    <td>
                      <div class="md-3">
                          <select class="form-select form-select-sm spacing" aria-label=".form-select-sm example" placeholder="Pilih Kecamatan">
                            <option value="1"> </option>
                            <option value="2"> </option>
                            <option value="3"> </option>
                            <option value="4"> </option>
                            <option value="5"> </option>
                            <option value="6"> </option>
                          </select>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="btn">
                <button class="btn btn-success" type="button">Simpan Perubahan</button>
              </div>
              </div>
        </div>
        <div className="card spacing">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">Verifikasi Data Riwayat Sekolah Terakhir</h6>
            <p class="card-text">
              Periksa dengan seksama dari data sekolah terakhir anda pada laman ini. Jika terdapat kesalahan
              data, lakukan perbaikan. Siswa dengan status aktif dan data salah, mohon untuk menghubungi pihak
              sekolah untuk melakukan perbaikan data. Untuk siswa yang telah lulus dapat melakukan perbaikan data
              di http://nisn.data.kemdikbud.go.id dan memilih menu verifikasi dan validasi lulusan. Setelah 
              perbaikan data dilakukan anda dapat menekan tombol dibawah ini untuk memperbarui data anda di laman ini.
            </p>
          </div>
        </div>

        <div class="card spacing">
            <h6 class="title">Data Riwayat Sekolah</h6>
            <div class="card-body">
              <table class="table-sm table-borderless mb-3">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="right-align">NPSN</td>
                    <td><strong>10210763</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Nama Sekolah</td>
                    <td><strong>SMAN 1 CEPU</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Jurusan</td>
                    <td><strong>MIPA</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Status Keaktifan Siswa</td>
                    <td><strong>Aktif</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Tanggal Siswa Masuk Sekolah</td>
                    <td><strong>01 JULI 2019</strong></td>
                  </tr>
                  <tr>
                    <td class="right-align">Semester Masuk Kelas 12</td>
                    <td><strong>2021-2022 Ganjil</strong></td>
                  </tr>                  
                </tbody>
              </table>
              </div>
        </div>
        <Link
          to="/verifikasi-foto"
        >
        <div class="d-grid gap-2 d-md-flex justify-content-md-end spacing">
          <button class="btn btn-primary me-md-2" type="button">Selanjutnya</button>
        </div>
        </Link>
      </div>

    </div>
  );
}

export default VerifikasiDataComponent;
