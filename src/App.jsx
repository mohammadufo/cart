import './App.scss'
import Logo from './assets/logo.svg'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { particlesOptions } from './particlesConfig'
import { ConfigProvider, Modal, message, theme } from 'antd'
import { useState } from 'react'

function App() {
  const particlesInit = (engine) => {
    loadFull(engine)
  }

  const { darkAlgorithm } = theme

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    message.success(' مرسی', { theme: 'dark' })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    message.success('مرسی')
  }

  return (
    <>
      <ConfigProvider
        theme={{
          // 1. Use dark algorithm
          algorithm: darkAlgorithm,
          token: {
            colorPrimary: '#ff0081',
          },
          // 2. Combine dark algorithm and compact algorithm
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        <div className="main">
          <Particles init={particlesInit} options={particlesOptions} />

          <div className="container">
            <span className="title">شما یک ‍‍پیام مهم دارید‌ ! 💥</span>
            <img className="main-img" src={Logo}></img>
            <div className="btn-wrapper">
              <button className="button" onClick={showModal}>
                <span className="btn-text">مشاهده پیام</span>
              </button>
            </div>
          </div>
        </div>

        <Modal
          className="rtl"
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="حتما میام"
          cancelText="باشه میام"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ConfigProvider>
    </>
  )
}

export default App
