import MainSidebar from '@/components/MainSidebar/MainSidebar'
import MainTable from '@/components/MainTable/MainTable'
import Searchbar from '@/components/Searchbar/Searchbar'
import Title from '@/components/Title/title'

export interface PatientData {
  name: string
  id: string
  date: string
  doctor: string
  room: string
  team: string
  diagnosis: string
}

const Patients = (): JSX.Element => {
  const columns = [
    'Name',
    'Patient ID',
    'Date',
    'Doctor',
    'Room',
    'Team',
    'Primary Diagnosis',
  ]
  const tableData = [
    {
      name: 'Leslie Alexander',
      id: '0000000000',
      date: '10/10/2023 08:00 AM',
      doctor: 'Dr. Jacob Jones',
      room: '101',
      team: 'A',
      diagnosis: 'Some Condition',
    },
  ]

  return (
    <>
      <MainSidebar />
      <div className="MainScreen">
        <Searchbar />
        <Title title={'Patients'} />
        <MainTable columns={columns} tableData={tableData} />
      </div>
    </>
  )
}

export default Patients
