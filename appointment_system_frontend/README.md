# Healthcare Appointment Frontend (Ocean Professional – Elegant)

A lightweight React app implementing a complete healthcare appointment flow with an elegant, luxurious aesthetic.

## Flow
1. Doctor Selection
2. Slot Selection
3. Patient Info
4. Confirmation
5. Success (post-confirmation)

## Theme
Ocean Professional – Elegant:
- Primary: `#F472B6`
- Secondary: `#F59E0B`
- Success: `#10B981`
- Error: `#EF4444`
- Background gradient: from rose-50 to purple-50
- Clean surfaces, rounded corners, subtle shadows.

CSS variables are applied at runtime through `src/theme.js` (`applyCSSVariables`) and used by styles in `src/App.css`.

## Run
- `npm start` – dev server
- `npm test` – unit test
- `npm run build` – production build

## Structure
- `src/theme.js` – Theme data and helpers
- `src/components/Sidebar.js` – Sidebar with booking steps
- `src/components/DoctorList.js` – Step 1 doctor selection
- `src/components/SlotSelection.js` – Step 2 slot selection
- `src/components/PatientInfoForm.js` – Step 3 patient details
- `src/components/Confirmation.js` – Step 4 confirmation
- `src/components/Success.js` – Success page

## Notes
- Mock data is used for doctors and slots (no backend required).
- All components are structured for easy style/design updates. Replace styles or wire API calls as needed.
