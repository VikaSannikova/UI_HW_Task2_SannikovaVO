package math;

import java.lang.reflect.Array;

public class Equation {
    private Double A;
    private Double B;
    private Double C;

    public Equation(Double a, Double b, Double c) {
        A = a;
        B = b;
        C = c;
    }

    private double calcDiscr()
    {
        return Math.sqrt(B*B - 4 * A * C);
    }

    public Double[] getRoots() {
        Double x1 = (-B + calcDiscr()) / (2 * A);
        Double x2 = (-B - calcDiscr()) / (2 * A);
        return new Double[] {x1, x2};
    }
}
