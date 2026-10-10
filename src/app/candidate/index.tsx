import { StyleSheet, Text, View } from 'react-native'

export default function CandidateScreen() {
  return <View style={styles.page}><Text style={styles.title}>Candidate applications</Text><Text style={styles.body}>A candidate account will track applications across organizations, independently of employee membership.</Text></View>
}

const styles = StyleSheet.create({ page: { flex: 1, padding: 28, backgroundColor: '#f5f7f8' }, title: { fontSize: 26, fontWeight: '700', color: '#172126' }, body: { fontSize: 16, lineHeight: 24, color: '#52666e', marginTop: 16 } })
