import React from "react";
import { createRoot } from 'react-dom/client';

import { Button } from "@ds.e/react";

const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container);

root.render(<Button label="Exit"></Button>);