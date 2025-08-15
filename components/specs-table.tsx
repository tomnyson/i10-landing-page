import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

const specifications = [
  { label: "Dòng xe", value: "Hyundai Grand i10" },
  { label: "Năm sản xuất", value: "2020" },
  { label: "Số km đã đi", value: "60.000 km" },
  { label: "Hộp số", value: "Số tự động" },
  { label: "Màu ngoại thất", value: "Vàng Nâu" },
  { label: "Màu nội thất", value: "Vàng da bò" },
  { label: "Nhiên liệu", value: "Xăng" },
  { label: "Động cơ", value: "1.2L Kappa" },
  { label: "Tình trạng pháp lý", value: "Sẵn sàng sang tên, không tranh chấp, phạt nguội" },
]

export function SpecsTable() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground flex items-center justify-center gap-3">
                <Settings className="h-8 w-8 text-primary" />
                Thông Số Kỹ Thuật
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={`border-b border-border ${index % 2 === 0 ? "bg-background/50" : ""}`}>
                        <td className="py-4 px-6 font-semibold text-card-foreground w-1/3">{spec.label}</td>
                        <td className="py-4 px-6 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
