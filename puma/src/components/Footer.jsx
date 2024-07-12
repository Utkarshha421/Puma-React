import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  return (
    <div>
                <link rel="stylesheet" href="../styles/footer.css" />
        <footer>
            <div className="end-part">
              <div className="end-part1">
                <div className="end-part11">
                  <p>
                    <b>SUPPORT</b>
                  </p>
                  <p>Contact us</p>
                  <p>Promotions and Sale</p>
                  <p>Track order</p>
                  <p>Shoe care</p>
                  <p>Tech Glossary</p>
                  <p>Initiate return/exchange</p>
                  <p>Running shoes</p>
                </div>
                <div className="end-part12">
                  <p>FAQ's</p>
                  <p>My account</p>
                  <p>Return and exchange policy</p>
                  <p>Privacy policy</p>
                  <p>Terms and conditions</p>
                  <p>Sneakers</p>
                  <p>Cookie settings</p>
                </div>
                <div className="end-part13">
                  <p>
                    <b>ABOUT</b>
                  </p>
                  <p>Company</p>
                  <p>Corporate news</p>
                  <p>Press center</p>
                  <p>Investers</p>
                  <p>Sustainibility</p>
                  <p>Careers</p>
                  <p>Store locator</p>
                  <p>Puma articles</p>
                </div>
                <div className="end-part14">
                  <p>
                    <b>STAY UP TO DATE</b>
                  </p>
                  <p>Sign up for email</p>
                  <p>
                    <b>EXPLORE</b>
                  </p>
                </div>
              </div>
              <div className="end-part2">
                <div className="end-part21">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACzCAMAAABhCSMaAAAAn1BMVEX///8aH3H3tgAAAGcAAGT3sgD09PbS0t7//vn3tAD85LQXHHAeI3QAAGng4esAAGMTGW8AC2v97NDo6fCLja4OFW4ABWoADGsKEm27vM+bnLmHiKzExNVgYpTw8PUvM3t1d6GsrcVRU4u8vdBsbptoapkAAFzKy9qkpb8/QoIoLHjY2eRGSYaxssgtMXqUlbV+f6Y5PH/++OxYWo9MTojKUlsBAAAKJklEQVR4nO2ceXviOBKH8UpDdtcRmAEDHcIR0glXju5Jvv9nW8JhS7+qEs7EkGf2qfe/bluxXZLqFo2GoijKhWheKQHNQjRXj0bxeLwqRWMSxcOoaCRUNCIqGhEVjYiKRkRFI6KiEVHRiKhoRFQ0IioaERWNiIpGREUjoqIRUdGIqGhEVDQiKhoRFY2IikbEF82jVTy8YkujqQQ0FEVRFEVRFEVRFEVRFEVRFEVRFEVpTLqtblerZwGt59546tqHqms6ny0Xk+9+pw9uBtcxnkat6PBRDgOGo8OVpzS8MHjlxjefH4bWdfKsqNWn2dAZOx3dRp/7PH4J/7y7it7/d5i33TCVyTr2Z2y4y2BA+yhKCxcM862LB7N9OtfMkA2MG99LT11kLoc/75ZfEgNHc3EzN6aTce+3p/9bHv3s4OZ8friywcYVQzbJ/dQMY70eg7X01DYV5zA6g3+fRW9qnSidzlgc+ISDirVxB0JLr2HoZmUi87ETzS/+oa02c3MqyfHrtJYr22HXdpLYhTQIX7IUwAwWxHAWDu21TwgmSdwz/1QyH/uXPKfqbvUyfiLzN2FEr4Nfc3O8tAYxuzt/YHOFO5H7WN4CbCx7t5HmryZunywnnLZwO1lmhUKZEFWz8cZ186iSOQ7hH4rr8UD/hr+9Pq7emcY/w1vGH3hrqQsXeMmXblfWax7CWm0KjYm5rBFr444u2HA3FMxzuM8WS+OmH17JVuWwZlpFMkmfdYQaN9JWdPWKgeWWyIa3FV28LyvN/BikNhiV4+ZVdtP2U3mn71qwFYnt1isGFrKb/TkvoUq4NCkZauEfxaVlxVZd3uTciqOd6CHWSIssG1Yj5vD5ab+4RBZUaW2Igj6OzrKtZ+39m3dU3nATF3R6dcuBY0o8OcaOkvnz3u0HOnyD4tKvAf2qrG9sNl39ng6tcQfPnHdvu5y7d/gjc25A3Yzw9b39UEDmz9vsI9hrpbVp0m9LzXRZ6O/W/evcmkGa8EEReTPvz/S5AXVDTC+zWMn8+dYTHdbS2iyJgckTom8Xv/rOsg6Dk5Rwwi/t2iG+A+NjvPbxzTx3FFVNeY14+dmKTV/9+M39N0ZmAVJgUS/4AWlKbklh/rKX8pocdlOHzX0m9vkd84h8B+F8kCVBnAaihH3dQMLuwtqQQzZDIbxmuQpXI8iJdzHqhigbkohCny6x3kUSdhfWhiR4PrULfgZ/N3tfw9/60jdXBZUFBm/EOwkcZvRYyxVFluNnosJJ+Fbu/i1cN0EIezYwPBo+hNcxRkrannmgYXdhbdCqJ9m0+kvBQ02jF5pyIdSrGfz09CW8jusie/Iuku3oCmtDRJO46sozdL+3swWeJabLzgNRlzawpVQX+T5hJOwmG2o7tKps7sOHbtUfxCOfWYFfAH2rMGXzAHo2zfyrkbCbqOEt7r1azPweaJad8wthnL1IhQ8/L9jHE/SEw9wKujxemEE8ng9yw6dmQiDo3ckbgpVzJ0H3oEMf7GOSTgoqKZGwm8mZ7oWXn7bhEJfu0mawP89QjGLA5HTgT2FOPLRfGHYH/gYXeCcfIeb6RLqlGW7xvV65BT38EP8bNYHJKM+lI0o4DAUxOg4CMLaItPtWs4puB/Cw9/4QeDpe7uOcoKb14tqfcCkLLfu7GHbvBotphcy+RfQx5JAOkQuUhc9ajCrAOKj06EmICK4WUURBkNGM5BVyKxryBdjp9/1/wwQK+eSaaYEASguMGjoNYxdihGAqaVbe/7ZrwdkHi3mcqGWoh4UqRN2Asinzi5ge7YRTLYfdB25issksG1Shu2AOHgyoPbHOWi8QPhdr4ypmm+k4Jsnbi8kmMZyZeQ0DjMIUQT41HdYrAwF0XM1BR+Kn40y9iGF3wZLpAvEGMPlvcIdK9QVL2FyiGEU8t4OKa5LkZqj6SF6cqwrfOrFmsqVParTgKnnaDSaKy++fAYiuD5mVU40zkbDbY/JuYglwzNJDQtZLDsHrXCYJio5rvt/fmJ7FXFSs2u1zZ+S6SdIOVxq65mVtHe1hkBw5H7iK19xbJm1YFLFqd0Bz1haL3+BEwq4JrqL7VaMAZMAL38eQM5hrYn8wfowkf1tjKwnH+BEV+pjBQl2Bl3yRJCjunQ99SnxZfJUuSXLFCmebseX18dHb3YE+ZlDegG1/mWIUxokfVhgtOtEk96ilT5RbN++W1cd+miMB5zPQJ/BGUm9kzWDIPyPLl05SNOzmn3JNk6JBSwiWvMKQDQKaLNLKWyOwx7crBNtLaBZArnbLzBjv2KuyY98BaFoMvr/82ZWANWJIIoq2CeAKqBQLMz1ypXpH1zN9ee15vEJeTeg7rBvouzKbk/VeEna3K2VQaINe0bZO6zNpJ+B0XHIOwLPNMElFFQnxlWkfAQup85eBfj8Wb1HO1ZEPoENBmrVIyvJ02M2zxPVYdOtw5ZkYaVKjACLwPe/FW+C5Azr7VZc3SbUXRjjaN8JxmSQoV2yMfjcNyysqRdJTdLRsJDt0kssUo0785qwhMTUt+FZ8EGkMPPo1mKI/zfk78vfERMM4ntGwe3wj1l2JSI85KaYr8hSX6Mj/QG7TZU+ekLDbl17mnHBccUOs0DG4Js0qp6lqFL9K5NWCCPAAfqIfR2xdt7Rjn5Y0RflKw6ijqsHyeRUukwSVDh/t3oDmGqPV7r0Rylx7/et5U2ytye3MMOJv7z/vPqrrBC5TjJLK91vSnN5Mwm4/wV94tenAGetenubz+WpoHadnjxUDcnamCp3LFKNoO+MRLm7EAx25XxsAV/rjTEKGhfUjh/Y3eliiCvlFOvK57vDj2zOeFXqIwfx9Ym8cm9hIW8WQ/a1yOBZ5oWKUOHFsvwbpHvF2Pdt0xFM0nuHfG84mXYYJeMzCoc3aEWwEd4QgerY72kMfkLquMIQ/t/BdSVDBHWU7CqNht3CalJFMIYA1HgeQznJ/TzFKiHzZFt1o2C0eDASyIuxakL5uyfR8TzGK+iq7+WPLPdhC4YefVT3+zrpQFGNcZ7IOwfJ8nQKIwCmbDrdkSUuSH3bTKIkj9X7cg556lY9nPH1HRz6vJNj5i57trhIMpe7aM2kkIRLJ/UCS9DId+UyWSXKqSNjt1z1m7f6JnFRukuCL8NRrrGH6Wzrymf5p5gjQjmjY3Wi9vljhx2o+og5n3sLuWPLTA7FkA3hfZ/xZkpDMmhDL19wN3PeI7kX37ufaGjfI/fWT5h1nO+M7dK6nbXjqY6yx+DF4tn280G9udVsIH/WT29jGmqu70f6XsXbfYM36bfTMaa4N+XOxd6zy6H8Kk1Zr+/H6i2qKoiiKoiiKoiiKoiiKoiiKoijK/yf/VgJKyfz5x38Ujz/+9ETzL8VDRSOiohFR0YioaERUNCIqGhEVjYiKRkRFI6KiEVHRiKhoRFQ0IioaERWNiIpGREUjoqIRUdGIqGhEVDQigWiUgFI0f/1XCfiroSiKciH+B1d6NWaubZhSAAAAAElFTkSuQmCC"
                    alt="visa"
                    width="24%"
                    height="20px"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png"
                    alt="mastercard"
                    width="20%"
                    height="20px"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png"
                    alt="maestro"
                    width="18%"
                    height="20px"
                  />
                  <img
                    src="https://images.indianexpress.com/2023/06/1200px-Rupay-Logo.png"
                    alt="rupay"
                    width="24%"
                    height="20px"
                  />
                </div>
                <div className="end-part22">INDIA</div>
                <div className="end-part23">
                  © PUMA INDIA LTD, 2024. ALL RIGHTS RESERVED. IMPRINT AND LEGAL
                  DATA PUMA.COM | Forever Faster
                </div>
              </div>
            </div>
          </footer>

    </div>
  )
}

export default Footer