import { StyleSheet, Text, View } from 'react-native'

export default function EmployeeScreen() {
  return <View style={styles.page}><Text style={styles.title}>Employee workspace</Text><Text style={styles.body}>Attendance, leave, payslips, expenses, assets, and helpdesk will appear according to organization permissions.</Text></View>
}

const styles = StyleSheet.create({ page: { flex: 1, padding: 28, backgroundColor: '#f5f7f8' }, title: { fontSize: 26, fontWeight: '700', color: '#172126' }, body: { fontSize: 16, lineHeight: 24, color: '#52666e', marginTop: 16 } })
