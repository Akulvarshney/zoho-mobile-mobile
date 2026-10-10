import { Link } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.eyebrow}>PROJECT SCAFFOLD</Text>
      <Text style={styles.title}>Business Platform</Text>
      <Text style={styles.body}>Mobile access for employees, candidates, and managers. Sign-in and permissions will be connected to the API.</Text>
      <View style={styles.links}>
        <Link href="/employee" style={styles.link}>Employee workspace →</Link>
        <Link href="/candidate" style={styles.link}>Candidate applications →</Link>
        <Link href="/approvals" style={styles.link}>Manager approvals →</Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 28, paddingTop: 64, backgroundColor: '#f5f7f8' },
  eyebrow: { color: '#087884', fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  title: { color: '#172126', fontSize: 34, fontWeight: '700', marginTop: 16 },
  body: { color: '#52666e', fontSize: 16, lineHeight: 24, marginTop: 16 },
  links: { marginTop: 36, gap: 16 },
  link: { color: '#0d6e77', backgroundColor: 'white', padding: 18, borderRadius: 10, fontWeight: '600' },
})
