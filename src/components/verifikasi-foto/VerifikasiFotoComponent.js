import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../dashboard-components/Header';
import { Link } from 'react-router-dom';

export default function VerifikasiFoto() {
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
            <h6 class="card-subtitle mb-2">Unggah Pasfoto</h6>
            <p class="card-text">
                Unggah pasfoto terbaru Anda sesuai dengan ketentuan.
            </p>
          </div>
        </div>

        <div className="card spacing">
          <div class="card-body">
            <h6>Pasfoto yang diunggah harus memenuhi ketentuan sebagai berikut</h6>
            <p class="card-text">
                <li>
                  Pasfoto terbaru ukuran <strong>4cm x 6cm</strong> dengan resolusi minimal <strong>200px x 300px (<u>+</u>250dpi)</strong> dan rasio aspek <strong>2:3</strong>
                </li>
                <li>
                  Pasfoto harus <strong>berwarna</strong> dengan latar belakang polos berwarna apa saja.
                </li>
                <li>
                  File pasfoto bertipe <strong>JPG/JPEG/PNG</strong>.
                </li>
                <li>
                  Ukuran minimal pasfoto adalah <strong>80 KB</strong>.
                </li>
                <li>
                Ukuran maksimal pasfoto adalah <strong>300 KB</strong>.
                </li>
                <li>
                  Orientasi pasfoto adalah <strong>vertikal/portrait</strong>.
                </li>
                <li>
                  Posisi badan dan kepala tegak sejajar menghadap kamera.
                </li>
                <li>
                  Kualitas foto harus tajam dan fokus.
                </li>
                <li>
                  Tidak ada bagian kepala yang terpotong dan wajah terlihat jelas.
                </li>
                <li>
                  Kepala terletak di tengah secara horizontal (jarak kepala ke batas kiri kurang lebih sama dengan jarak kepala ke batas kanan).
                </li>
            </p>
            <h6>Unggah pasfoto Anda pada form ini dan tekan tombol <strong>Unggah</strong>. Kemudian lanjutkan ke langkah berikutnya untuk melakukan penyesuaian pasfoto.</h6>
            <div class="row">
              <div class="col-11">
                <input type="file" />
              </div>
              <div class="col-1">
                <button class="btn btn-success">Unggah</button>
              </div>
            </div>
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
