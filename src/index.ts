import "./index.css";

import {weeksToDays} from 'date-fns';

const days = weeksToDays(32);

document.querySelector("#root")!.innerHTML = `
<div class="content">
  <h1>Vanilla Rspack</h1>
  <p>Start building amazing things with Rspack.</p>
  ${days}
</div>
`;
