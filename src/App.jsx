import React from 'react';
import './App.css';
import './css/bootstrap-reboot.css';
import './css/chat-block.css';
import './css/chat.css';
import './css/style.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="chat-wrap">
              <div className="contacts-wrap">
                <div className="contact">
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/" label="user-foto"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/" className="contact-user-name">
                          john_snow
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user active">
                    <div className="contact-user-foto">
                      <a href="/" label="user-foto"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/" className="contact-user-name">
                          martin
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/" label="user-foto"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/" className="contact-user-name">
                          sherlock
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/" label="user-foto"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/" className="contact-user-name">
                          monica
                        </a>
                      </div>

                    </div>
                  </div>

                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/" label="user-foto"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/" label="user-name" className="contact-user-name">
                          dallas
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* <!--class="chat-block blocked" for blocked chat--> */}
              <div className="chat-block">
                <div className="blocked-wrap">
                  <div style={{ position: 'relative' }}>
                    <div className="chat">
                      <div className="chat-message">
                        <div className="chat-message-foto">
                          <img src="" alt="" />
                        </div>
                        <div className="chat-message-text">
                          My name is martin
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                      </div>
                      <div className="chat-message user-message">
                        <div className="chat-message-foto">
                          <img src="" alt="" />
                        </div>
                        <div className="chat-message-text">
                          You are so stupid...
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                      </div>
                      <div className="chat-message">
                        <div className="chat-message-foto">
                          <img src="" alt="" />
                        </div>
                        <div className="chat-message-text">
                          London is the capital of great britain.
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                      </div>
                      <div className="chat-message user-message">
                        <div className="chat-message-foto">
                          <img src="" alt="" />
                        </div>
                        <div className="chat-message-text">
                          Hello, bot
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-form">
                    <form action="">
                      <div className="textarea-wrap">
                        <textarea placeholder="Text" />
                      </div>
                      <div className="textarea-count-wrap">
                        <div className="checkbox-wrap">
                          Press Enter to send
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3" style={{ color: 'white' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 195.60606384277344 50"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: '100%', padding: '5px' }}
            >

              <desc>Created with Sketch.</desc>
              <defs>
                <linearGradient x1="115.64738%" y1="-16.611735%" x2="-28.6621094%" y2="129.600016%" id="c39c6655-cf55-46bb-a4c7-f510fd8bc124">
                  <stop stopColor="#009CFF" offset="0%" />
                  <stop stopColor="#0033FF" offset="100%" />
                </linearGradient>
              </defs>
              <g id="77b92d32-5d19-4d85-8714-ce8066410250" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="625a0048-2516-4558-ab1a-99f4e5facfac" transform="translate(-100.000000, -80.000000)">
                  <g id="c558be08-6711-426c-be55-3e0b2659cee0" transform="translate(100.000000, 80.000000)">
                    <g id="cdb5f274-ad72-466c-a299-8cb498b6bfef">
                      <g id="c5962a83-4b42-4d37-ab3e-b37d638b3639">
                        <path d="M17.526559,-7.0809396e-16 L32.473441,7.0809396e-16 C38.5678074,-4.11422983e-16 40.7777719,0.634550076 43.0057812,1.82610247 C45.2337904,3.01765486 46.9823451,4.76620956 48.1738975,6.99421882 C49.3654499,9.22222808 50,11.4321926 50,17.526559 L50,32.473441 C50,38.5678074 49.3654499,40.7777719 48.1738975,43.0057812 C46.9823451,45.2337904 45.2337904,46.9823451 43.0057812,48.1738975 C40.7777719,49.3654499 38.5678074,50 32.473441,50 L17.526559,50 C11.4321926,50 9.22222808,49.3654499 6.99421882,48.1738975 C4.76620956,46.9823451 3.01765486,45.2337904 1.82610247,43.0057812 C0.634550076,40.7777719 2.74281988e-16,38.5678074 -4.7206264e-16,32.473441 L4.7206264e-16,17.526559 C-2.74281988e-16,11.4321926 0.634550076,9.22222808 1.82610247,6.99421882 C3.01765486,4.76620956 4.76620956,3.01765486 6.99421882,1.82610247 C9.22222808,0.634550076 11.4321926,4.11422983e-16 17.526559,-7.0809396e-16 Z" id="fd0b5f86-788e-4116-86dd-99580545640b" fill="url(#c39c6655-cf55-46bb-a4c7-f510fd8bc124)" />
                        <g id="45250ea5-029c-415a-b1ef-825454a0e3ea" transform="translate(15.527344, 11.132812)" fill="#FFFFFF">
                          <path d="M3.41796875,1.22070313 L3.41796875,6.59179688 L4.63867187,4.63867187 L15.625,4.63867188 L15.625,1.22070313 C15.625,0.437221924 15.8180813,2.47198095e-14 17.0898438,0 L17.578125,0 C18.8498875,0 19.0429688,0.437221924 19.0429688,1.22070312 L19.0429688,26.6113281 C19.0429688,27.3948093 18.8498875,27.8320312 17.578125,27.8320313 L17.0898438,27.8320312 C15.8180813,27.8320312 15.625,27.3948093 15.625,26.6113281 L15.625,23.1933594 L3.41796875,23.1933594 L3.41796875,26.6113281 C3.41796875,27.3948093 3.22488745,27.8320312 1.953125,27.8320313 L1.46484375,27.8320313 C0.193081299,27.8320313 0,27.3948093 0,26.6113281 L0,1.22070312 C0,0.437221924 0.193081299,0 1.46484375,0 L1.953125,4.94396191e-14 C3.22488745,4.94396191e-14 3.41796875,0.437221924 3.41796875,1.22070313 Z M15.625,15.3808594 L3.41796875,15.3808594 L3.41796875,22.2167969 L4.63867188,20.2636719 L15.625,20.2636719 L15.625,15.3808594 Z M15.625,12.4511719 L15.625,7.56835938 L3.41796875,7.56835938 L3.41796875,14.4042969 L4.63867188,12.4511719 L15.625,12.4511719 Z" id="21be3c02-3c40-47ec-8cc5-4b75d8d80309" />
                        </g>
                      </g>
                      <path d="M75.3333333,14.7878788 L80.1818182,14.7878788 L80.1818182,36 L75.3333333,36 L75.3333333,27.5757576 L68.6666667,27.5757576 L68.6666667,36 L63.8181818,36 L63.8181818,14.7878788 L68.6666667,14.7878788 L68.6666667,22.9090909 L75.3333333,22.9090909 L75.3333333,14.7878788 Z M87.7272727,30.2424242 C88.3030303,31.8181818 89.6969697,32.3636364 91.3636364,32.3636364 C92.6060606,32.3636364 93.6666667,31.8787879 94.2727273,31.2121212 L97.9090909,33.3030303 C96.4242424,35.3636364 94.1818182,36.4242424 91.3030303,36.4242424 C86.1212121,36.4242424 82.9090909,32.9393939 82.9090909,28.4242424 C82.9090909,23.9090909 86.1818182,20.4242424 90.969697,20.4242424 C95.3939394,20.4242424 98.6666667,23.8484848 98.6666667,28.4242424 C98.6666667,29.0606061 98.6060606,29.6666667 98.4848485,30.2424242 L87.7272727,30.2424242 Z M87.6363636,26.8484848 L94.1515152,26.8484848 C93.6666667,25.0909091 92.3030303,24.4545455 90.9393939,24.4545455 C89.2121212,24.4545455 88.0606061,25.3030303 87.6363636,26.8484848 Z M112.242424,20.8484848 L116.787879,20.8484848 L116.787879,36 L112.242424,36 L112.242424,34.5757576 C111.242424,35.7272727 109.757576,36.4242424 107.727273,36.4242424 C103.757576,36.4242424 100.484848,32.9393939 100.484848,28.4242424 C100.484848,23.9090909 103.757576,20.4242424 107.727273,20.4242424 C109.757576,20.4242424 111.242424,21.1212121 112.242424,22.2727273 L112.242424,20.8484848 Z M108.636364,32.1212121 C110.727273,32.1212121 112.242424,30.6969697 112.242424,28.4242424 C112.242424,26.1515152 110.727273,24.7272727 108.636364,24.7272727 C106.545455,24.7272727 105.030303,26.1515152 105.030303,28.4242424 C105.030303,30.6969697 106.545455,32.1212121 108.636364,32.1212121 Z M131.121212,14.7878788 L135.666667,14.7878788 L135.666667,36 L131.121212,36 L131.121212,34.5757576 C130.121212,35.7272727 128.636364,36.4242424 126.606061,36.4242424 C122.636364,36.4242424 119.363636,32.9393939 119.363636,28.4242424 C119.363636,23.9090909 122.636364,20.4242424 126.606061,20.4242424 C128.636364,20.4242424 130.121212,21.1212121 131.121212,22.2727273 L131.121212,14.7878788 Z M127.515152,32.1212121 C129.606061,32.1212121 131.121212,30.6969697 131.121212,28.4242424 C131.121212,26.1515152 129.606061,24.7272727 127.515152,24.7272727 C125.424242,24.7272727 123.909091,26.1515152 123.909091,28.4242424 C123.909091,30.6969697 125.424242,32.1212121 127.515152,32.1212121 Z M155.666667,20.8484848 L160.515152,20.8484848 L155.666667,36 L151.424242,36 L149,27.9090909 L146.575758,36 L142.333333,36 L137.484848,20.8484848 L142.333333,20.8484848 L144.515152,28.969697 L146.878788,20.8484848 L151.121212,20.8484848 L153.484848,28.969697 L155.666667,20.8484848 Z M173.333333,20.8484848 L177.878788,20.8484848 L177.878788,36 L173.333333,36 L173.333333,34.5757576 C172.333333,35.7272727 170.848485,36.4242424 168.818182,36.4242424 C164.848485,36.4242424 161.575758,32.9393939 161.575758,28.4242424 C161.575758,23.9090909 164.848485,20.4242424 168.818182,20.4242424 C170.848485,20.4242424 172.333333,21.1212121 173.333333,22.2727273 L173.333333,20.8484848 Z M169.727273,32.1212121 C171.818182,32.1212121 173.333333,30.6969697 173.333333,28.4242424 C173.333333,26.1515152 171.818182,24.7272727 169.727273,24.7272727 C167.636364,24.7272727 166.121212,26.1515152 166.121212,28.4242424 C166.121212,30.6969697 167.636364,32.1212121 169.727273,32.1212121 Z M190.757576,20.8484848 L195.606061,20.8484848 L190.424242,35.5454545 C188.727273,40.3636364 186.030303,42.2727273 181.787879,42.0606061 L181.787879,37.8181818 C183.909091,37.8181818 184.909091,37.1515152 185.575758,35.3030303 L179.545455,20.8484848 L184.545455,20.8484848 L187.909091,30.1212121 L190.757576,20.8484848 Z" id="fd7b7536-1cc8-4002-90b1-83edb470df61" fill="#FFFFFF" fillRule="nonzero" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {/* Тестовое задание на позицию: <br />
                <b style="float:right">Frontend Developer</b> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
