import React from 'react'

export default function SelectField({label, name, register, options=[]}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select {...(register? register(name): {})} className="w-full border rounded px-3 py-2">
        <option value="">-- Select --</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
