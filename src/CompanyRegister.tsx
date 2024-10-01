import React from 'react';

import { useState } from 'react';
import { InformationComponent } from './InformationComponent';
import { CompanyRegisterForm } from './CompanyRegisterForm';

export function CompanyRegister() {
  const [step, setStep] = useState(1);

  const componentsInfo = [
    <InformationComponent
      title="Bienvenido/a a la Oficina Virtual"
      description={<span>Accede a una plataforma segura y confiable para realizar tus <strong>trámites de manera ágil y eficiente</strong>, desde cualquier lugar y en cualquier momento.</span>}
    />
  ];

  const componentsForms = [
    <CompanyRegisterForm key={1} />
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">{componentsInfo[step - 1]}</div>
        <div className="col-span-1 flex flex-col justify-between h-screen overflow-auto">
          <div className="flex-1 flex items-center justify-center px-10">
            {componentsForms[step - 1]}
          </div>
        </div>
      </div>
    </div>
  );
}
