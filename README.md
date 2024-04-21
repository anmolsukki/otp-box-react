### OTP Box React

## 1.Installation

```
npm install --save otp-box-react
```

```jsx
import { useState } from 'react';
import { OtpInput } from 'otp-box-react';
```

## 2.Usage

```jsx
const [state, setState] = useState({ otp: new Array(6).fill('') });
```

```jsx
const onChangeOtpHandler = (otpvalues, event, index) => {
  setState({ ...state, otp: otpvalues });
};
```

```jsx
<OtpInput name="otp" className="otp-field" placeholder=" " otpvalue={state.otp} onChangeOtpHandler={onChangeOtpHandler} />
```

---

### Hi there, I'm [Anmol](https://www.linkedin.com/in/anmolsukki/) 👋

[![CodeSandbox](https://img.shields.io/badge/Codesandbox-000000?style=flat-round&logo=CodeSandbox)](https://codesandbox.io/u/anmolsukki)&nbsp;&nbsp;&nbsp;
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat-round&logo=discord&logoColor=white)](https://discord.gg/zMkSphwHjE)&nbsp;&nbsp;&nbsp;
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-round&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anmolsukki/)](https://www.linkedin.com/in/anmolsukki/)&nbsp;&nbsp;&nbsp;
[![facebook](https://aleen42.github.io/badges/src/facebook.svg)](https://www.facebook.com/Anmolsukki/)&nbsp;&nbsp;&nbsp;
[![twitter](https://aleen42.github.io/badges/src/twitter.svg)](https://twitter.com/anmolsukki)&nbsp;&nbsp;&nbsp;
[![Instagram](https://img.shields.io/badge/-Instagram-e4405f?style=flat-round&logo=Instagram&logoColor=white)](https://www.instagram.com/anmolsukki/)&nbsp;&nbsp;&nbsp;
[![slack](https://aleen42.github.io/badges/src/slack.svg)](https://join.slack.com/t/anmolsukki/shared_invite/zt-k7cfber5-JVl_kGaNdNqvwsMADPiUWg)&nbsp;&nbsp;&nbsp;
[![stackoverflow](https://aleen42.github.io/badges/src/stackoverflow.svg)](https://stackoverflow.com/users/10825957/anmol-kumar-singh)
