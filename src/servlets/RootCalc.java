package servlets;

import math.Equation;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@WebServlet("/calculate")
public class RootCalc extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(req.getInputStream()));
        String data = bufferedReader.readLine();

        JSONObject dataJsonObject = (JSONObject) JSONValue.parse(data);
        Double A = Double.parseDouble(dataJsonObject.get("Atag").toString());
        Double B = Double.parseDouble(dataJsonObject.get("Btag").toString());
        Double C = Double.parseDouble(dataJsonObject.get("Ctag").toString());

        Equation equation = new Equation(A, B, C);
        Double[] arr = equation.getRoots();
        String roots = String.format("%.2f %.2f", arr[0], arr[1]);

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("x1", arr[0]);
        jsonObject.put("x2", arr[1]);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(jsonObject.toJSONString());
    }
}
