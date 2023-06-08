import React, { useState } from 'react';
import './css/form.css';

function Form() {
  const [materialCost, setMaterialCost] = useState("");
  const [labourCost, setLabourCost] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [sqFt, setSqFt] = useState(1);

  const totalCost = Number(materialCost) + Number(labourCost) + Number(miscellaneous);
  const costPerSqFt = totalCost / sqFt || 0;

  return (
    <form className="form-stripe">
      <div className="form-group">
        <label>Material Cost: </label>
        <input min="0" type="number" value={materialCost} onChange={e => setMaterialCost(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Labour Cost: </label>
        <input min="0" type="number" value={labourCost} onChange={e => setLabourCost(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Miscellaneous: </label>
        <input min="0" type="number" value={miscellaneous} onChange={e => setMiscellaneous(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Sq. Ft.: </label>
        <input min="0" type="number" value={sqFt} onChange={e => setSqFt(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Total Cost: </label>
        <output style={{fontWeight: "600"}}>${totalCost.toFixed(2)}</output>
      </div>

      <div className="form-group">
        <label>Cost per Sq. Ft.: </label>
        <output style={{fontWeight: "600"}} min="1">${costPerSqFt.toFixed(2)}</output>
      </div>
    </form>
  );
}

export default Form;
